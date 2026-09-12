from pydantic import BaseModel
from typing import Optional, List
from datetime import date

class CompanyBase(BaseModel):
    name: str
    industry: str
    website: Optional[str] = None
    hr_contact_name: Optional[str] = None
    hr_email: Optional[str] = None

class CompanyCreate(CompanyBase):
    pass

class CompanyResponse(CompanyBase):
    id: int
    class Config:
        from_attributes = True

class JobPostingBase(BaseModel):
    company_id: int
    title: str
    job_type: Optional[str] = "FULL_TIME"
    description: Optional[str] = None
    ctc_offered: Optional[float] = None
    cgpa_cutoff: Optional[float] = None
    deadline: date
    is_active: Optional[bool] = True

class JobPostingCreate(JobPostingBase):
    pass

class JobPostingResponse(JobPostingBase):
    id: int
    class Config:
        from_attributes = True

class PlacementApplicationBase(BaseModel):
    job_id: int
    student_id: int
    resume_url: Optional[str] = None

class PlacementApplicationCreate(PlacementApplicationBase):
    pass

class PlacementApplicationResponse(PlacementApplicationBase):
    id: int
    status: str
    applied_date: date
    class Config:
        from_attributes = True

class UniversityEventBase(BaseModel):
    title: str
    description: Optional[str] = None
    event_date: date
    location: str
    organizer: Optional[str] = None
    is_public: Optional[bool] = True

class UniversityEventCreate(UniversityEventBase):
    pass

class UniversityEventResponse(UniversityEventBase):
    id: int
    class Config:
        from_attributes = True
