from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class AssignmentBase(BaseModel):
    title: str
    description: Optional[str] = None
    subject_id: int
    max_marks: int
    deadline: datetime
    status: str
    attachment_url: Optional[str] = None

class AssignmentCreate(AssignmentBase):
    faculty_id: int

class AssignmentResponse(AssignmentBase):
    id: int
    faculty_id: int
    
    class Config:
        from_attributes = True

class SubmissionBase(BaseModel):
    assignment_id: int
    student_id: int
    submission_url: str

class SubmissionCreate(SubmissionBase):
    pass

class SubmissionGrade(BaseModel):
    marks_obtained: int
    faculty_feedback: Optional[str] = None

class SubmissionResponse(SubmissionBase):
    id: int
    status: str
    marks_obtained: Optional[int] = None
    faculty_feedback: Optional[str] = None
    
    class Config:
        from_attributes = True
