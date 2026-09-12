from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import schemas, models
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.post("/assignments", response_model=schemas.AssignmentResponse)
def create_assignment(
    *,
    db: Session = Depends(deps.get_db),
    assignment_in: schemas.AssignmentCreate,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    # Ensure current user is faculty
    assignment = models.Assignment(**assignment_in.model_dump())
    db.add(assignment)
    db.commit()
    db.refresh(assignment)
    return assignment

@router.get("/assignments/subject/{subject_id}", response_model=List[schemas.AssignmentResponse])
def get_assignments_by_subject(
    subject_id: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    assignments = db.query(models.Assignment).filter(models.Assignment.subject_id == subject_id).all()
    return assignments

@router.post("/submissions", response_model=schemas.SubmissionResponse)
def submit_assignment(
    *,
    db: Session = Depends(deps.get_db),
    submission_in: schemas.SubmissionCreate,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    submission = models.AssignmentSubmission(**submission_in.model_dump())
    db.add(submission)
    db.commit()
    db.refresh(submission)
    return submission

@router.put("/submissions/{submission_id}/grade", response_model=schemas.SubmissionResponse)
def grade_submission(
    *,
    submission_id: int,
    db: Session = Depends(deps.get_db),
    grade_in: schemas.SubmissionGrade,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    submission = db.query(models.AssignmentSubmission).filter(models.AssignmentSubmission.id == submission_id).first()
    if not submission:
        raise HTTPException(status_code=404, detail="Submission not found")
        
    submission.marks_obtained = grade_in.marks_obtained
    submission.faculty_feedback = grade_in.faculty_feedback
    submission.status = models.lms.SubmissionStatus.GRADED
    
    db.commit()
    db.refresh(submission)
    return submission
