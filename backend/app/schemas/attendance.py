from pydantic import BaseModel
from typing import Optional, List
from datetime import date

class AttendanceBase(BaseModel):
    date: date
    student_id: int
    section_id: int
    status: str
    remarks: Optional[str] = None

class AttendanceCreate(AttendanceBase):
    faculty_id: int

class AttendanceResponse(AttendanceBase):
    id: int
    faculty_id: int
    
    class Config:
        from_attributes = True

class AttendanceSummary(BaseModel):
    student_id: int
    total_classes: int
    present_classes: int
    attendance_percentage: float
