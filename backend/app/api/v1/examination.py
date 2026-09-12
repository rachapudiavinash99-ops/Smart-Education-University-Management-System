from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import schemas, models
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.post("/exams", response_model=schemas.ExamResponse)
def create_exam(
    *,
    db: Session = Depends(deps.get_db),
    exam_in: schemas.ExamCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    exam = models.Exam(**exam_in.model_dump())
    db.add(exam)
    db.commit()
    db.refresh(exam)
    return exam

@router.post("/results", response_model=schemas.ExamResultResponse)
def enter_exam_result(
    *,
    db: Session = Depends(deps.get_db),
    result_in: schemas.ExamResultCreate,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    # Basic grade calculation logic
    schedule = db.query(models.ExamSchedule).filter(models.ExamSchedule.id == result_in.schedule_id).first()
    if not schedule:
        raise HTTPException(status_code=404, detail="Schedule not found")
        
    grade = "F"
    percentage = (result_in.marks_obtained / schedule.max_marks) * 100 if schedule.max_marks > 0 else 0
    if percentage >= 90: grade = "A+"
    elif percentage >= 80: grade = "A"
    elif percentage >= 70: grade = "B"
    elif percentage >= 60: grade = "C"
    elif percentage >= 50: grade = "D"
    
    result_data = result_in.model_dump()
    result_data["grade"] = grade
    
    result = models.ExamResult(**result_data)
    db.add(result)
    db.commit()
    db.refresh(result)
    return result

@router.get("/student/{student_id}/results", response_model=List[schemas.ExamResultResponse])
def get_student_results(
    student_id: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    results = db.query(models.ExamResult).filter(models.ExamResult.student_id == student_id).all()
    return results
