from pydantic import BaseModel
from typing import Optional, List
from datetime import date

# Campus
class CampusBase(BaseModel):
    name: str
    address: str
    city: str
    state: str
    country: str
    zip_code: str
    is_active: Optional[bool] = True

class CampusCreate(CampusBase):
    pass

class CampusResponse(CampusBase):
    id: int
    class Config:
        from_attributes = True

# Department
class DepartmentBase(BaseModel):
    name: str
    code: str
    campus_id: int
    is_active: Optional[bool] = True

class DepartmentCreate(DepartmentBase):
    pass

class DepartmentResponse(DepartmentBase):
    id: int
    class Config:
        from_attributes = True

# Program
class ProgramBase(BaseModel):
    name: str
    code: str
    department_id: int
    duration_years: int
    is_active: Optional[bool] = True

class ProgramCreate(ProgramBase):
    pass

class ProgramResponse(ProgramBase):
    id: int
    class Config:
        from_attributes = True
