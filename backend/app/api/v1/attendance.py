from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import func
from datetime import date

from app import schemas, models
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.post("/", response_model=schemas.AttendanceResponse)
def mark_attendance(
    *,
    db: Session = Depends(deps.get_db),
    attendance_in: schemas.AttendanceCreate,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    # Ensure no duplicate attendance for same student, section, and date
    existing = db.query(models.Attendance).filter(
        models.Attendance.student_id == attendance_in.student_id,
        models.Attendance.section_id == attendance_in.section_id,
        models.Attendance.date == attendance_in.date
    ).first()

    if existing:
        existing.status = attendance_in.status
        existing.remarks = attendance_in.remarks
        db.commit()
        db.refresh(existing)
        return existing
        
    attendance = models.Attendance(**attendance_in.model_dump())
    db.add(attendance)
    db.commit()
    db.refresh(attendance)
    return attendance

@router.get("/section/{section_id}", response_model=List[schemas.AttendanceResponse])
def get_section_attendance(
    section_id: int,
    attendance_date: date,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    records = db.query(models.Attendance).filter(
        models.Attendance.section_id == section_id,
        models.Attendance.date == attendance_date
    ).all()
    return records

@router.get("/student/{student_id}/summary", response_model=schemas.AttendanceSummary)
def get_student_attendance_summary(
    student_id: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    total = db.query(func.count(models.Attendance.id)).filter(
        models.Attendance.student_id == student_id
    ).scalar() or 0
    
    present = db.query(func.count(models.Attendance.id)).filter(
        models.Attendance.student_id == student_id,
        models.Attendance.status == models.AttendanceStatus.PRESENT
    ).scalar() or 0
    
    percentage = (present / total * 100) if total > 0 else 0
    
    return {
        "student_id": student_id,
        "total_classes": total,
        "present_classes": present,
        "attendance_percentage": round(percentage, 2)
    }
