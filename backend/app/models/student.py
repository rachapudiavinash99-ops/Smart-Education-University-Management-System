from sqlalchemy import Column, String, Integer, ForeignKey, Date, Boolean
from sqlalchemy.orm import relationship
from app.models.base import BaseModel

class StudentProfile(BaseModel):
    __tablename__ = "student_profiles"

    user_id = Column(Integer, ForeignKey("users.id"), unique=True, nullable=False)
    admission_number = Column(String, unique=True, index=True, nullable=False)
    date_of_birth = Column(Date, nullable=False)
    gender = Column(String, nullable=False)
    blood_group = Column(String, nullable=True)
    
    # Address
    address = Column(String, nullable=False)
    city = Column(String, nullable=False)
    state = Column(String, nullable=False)
    country = Column(String, nullable=False)
    zip_code = Column(String, nullable=False)

    # Guardian Info
    guardian_name = Column(String, nullable=False)
    guardian_phone = Column(String, nullable=False)
    guardian_email = Column(String, nullable=True)
    guardian_relation = Column(String, nullable=False)
    
    # Academic Info
    department_id = Column(Integer, ForeignKey("departments.id"), nullable=False)
    program_id = Column(Integer, ForeignKey("programs.id"), nullable=False)
    batch_id = Column(Integer, ForeignKey("batches.id"), nullable=False)
    current_semester_id = Column(Integer, ForeignKey("semesters.id"), nullable=True)

    # Relationships
    user = relationship("User", backref="student_profile")
    department = relationship("Department")
    program = relationship("Program")
    batch = relationship("Batch")
    current_semester = relationship("Semester")
