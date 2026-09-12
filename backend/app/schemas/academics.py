from pydantic import BaseModel
from typing import Optional, List
from datetime import time

# Subject
class SubjectBase(BaseModel):
    name: str
    code: str
    credits: int
    subject_type: str
    department_id: int
    is_active: Optional[bool] = True

class SubjectCreate(SubjectBase):
    pass

class SubjectResponse(SubjectBase):
    id: int
    class Config:
        from_attributes = True

# Section
class SectionBase(BaseModel):
    name: str
    subject_id: int
    semester_id: int
    faculty_id: Optional[int] = None
    capacity: Optional[int] = 60

class SectionCreate(SectionBase):
    pass

class SectionResponse(SectionBase):
    id: int
    class Config:
        from_attributes = True
