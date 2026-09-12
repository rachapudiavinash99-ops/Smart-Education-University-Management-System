from sqlalchemy import Column, String, Integer, ForeignKey, Date, Boolean
from sqlalchemy.orm import relationship
from app.models.base import BaseModel

class FacultyProfile(BaseModel):
    __tablename__ = "faculty_profiles"

    user_id = Column(Integer, ForeignKey("users.id"), unique=True, nullable=False)
    employee_id = Column(String, unique=True, index=True, nullable=False)
    designation = Column(String, nullable=False) # e.g. "Assistant Professor"
    joining_date = Column(Date, nullable=False)
    qualification = Column(String, nullable=False)
    experience_years = Column(Integer, default=0)
    
    # Address
    address = Column(String, nullable=False)
    city = Column(String, nullable=False)
    state = Column(String, nullable=False)
    country = Column(String, nullable=False)
    zip_code = Column(String, nullable=False)

    department_id = Column(Integer, ForeignKey("departments.id"), nullable=False)

    user = relationship("User", backref="faculty_profile")
    department = relationship("Department")
