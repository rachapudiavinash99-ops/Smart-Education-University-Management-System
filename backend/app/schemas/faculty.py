from pydantic import BaseModel
from typing import Optional
from datetime import date

class FacultyProfileBase(BaseModel):
    user_id: int
    employee_id: str
    designation: str
    joining_date: date
    qualification: str
    experience_years: Optional[int] = 0
    address: str
    city: str
    state: str
    country: str
    zip_code: str
    department_id: int

class FacultyProfileCreate(FacultyProfileBase):
    pass

class FacultyProfileResponse(FacultyProfileBase):
    id: int
    class Config:
        from_attributes = True
