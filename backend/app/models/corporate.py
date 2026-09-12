from sqlalchemy import Column, String, Integer, ForeignKey, Date, Boolean, Enum, Text, Float
from sqlalchemy.orm import relationship
import enum
from app.models.base import BaseModel

class JobTypeEnum(str, enum.Enum):
    FULL_TIME = "FULL_TIME"
    INTERNSHIP = "INTERNSHIP"
    PART_TIME = "PART_TIME"

class ApplicationStatusEnum(str, enum.Enum):
    APPLIED = "APPLIED"
    SHORTLISTED = "SHORTLISTED"
    INTERVIEW = "INTERVIEW"
    OFFERED = "OFFERED"
    REJECTED = "REJECTED"

class Company(BaseModel):
    __tablename__ = "companies"

    name = Column(String, nullable=False, unique=True, index=True)
    industry = Column(String, nullable=False)
    website = Column(String, nullable=True)
    hr_contact_name = Column(String, nullable=True)
    hr_email = Column(String, nullable=True)

class JobPosting(BaseModel):
    __tablename__ = "job_postings"

    company_id = Column(Integer, ForeignKey("companies.id"), nullable=False)
    title = Column(String, nullable=False)
    job_type = Column(Enum(JobTypeEnum), default=JobTypeEnum.FULL_TIME)
    description = Column(Text, nullable=True)
    ctc_offered = Column(Float, nullable=True) # Package in LPA or similar
    cgpa_cutoff = Column(Float, nullable=True)
    deadline = Column(Date, nullable=False)
    is_active = Column(Boolean, default=True)

    company = relationship("Company")

class PlacementApplication(BaseModel):
    __tablename__ = "placement_applications"

    job_id = Column(Integer, ForeignKey("job_postings.id"), nullable=False)
    student_id = Column(Integer, ForeignKey("student_profiles.id"), nullable=False)
    status = Column(Enum(ApplicationStatusEnum), default=ApplicationStatusEnum.APPLIED)
    resume_url = Column(String, nullable=True)
    applied_date = Column(Date, nullable=False)

    job = relationship("JobPosting")
    student = relationship("StudentProfile")

class UniversityEvent(BaseModel):
    __tablename__ = "university_events"

    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    event_date = Column(Date, nullable=False)
    location = Column(String, nullable=False)
    organizer = Column(String, nullable=True)
    is_public = Column(Boolean, default=True)
