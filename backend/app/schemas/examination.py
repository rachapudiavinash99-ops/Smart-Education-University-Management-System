from pydantic import BaseModel
from typing import Optional, List
from datetime import date, time

class ExamBase(BaseModel):
    name: str
    exam_type: str
    semester_id: int
    is_published: Optional[bool] = False

class ExamCreate(ExamBase):
    pass

class ExamResponse(ExamBase):
    id: int
    class Config:
        from_attributes = True

class ExamScheduleBase(BaseModel):
    exam_id: int
    subject_id: int
    classroom_id: Optional[int] = None
    exam_date: date
    start_time: time
    end_time: time
    max_marks: Optional[int] = 100
    passing_marks: Optional[int] = 40

class ExamScheduleCreate(ExamScheduleBase):
    pass

class ExamScheduleResponse(ExamScheduleBase):
    id: int
    class Config:
        from_attributes = True

class ExamResultBase(BaseModel):
    schedule_id: int
    student_id: int
    marks_obtained: float
    is_absent: Optional[bool] = False
    remarks: Optional[str] = None

class ExamResultCreate(ExamResultBase):
    pass

class ExamResultResponse(ExamResultBase):
    id: int
    grade: Optional[str] = None
    class Config:
        from_attributes = True
