from sqlalchemy import Column, String, Integer, ForeignKey, Date, Boolean
from sqlalchemy.orm import relationship
from app.models.base import BaseModel

class Campus(BaseModel):
    __tablename__ = "campuses"

    name = Column(String, unique=True, index=True, nullable=False)
    address = Column(String, nullable=False)
    city = Column(String, nullable=False)
    state = Column(String, nullable=False)
    country = Column(String, nullable=False)
    zip_code = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)

    departments = relationship("Department", back_populates="campus")

class Department(BaseModel):
    __tablename__ = "departments"

    name = Column(String, unique=True, index=True, nullable=False)
    code = Column(String, unique=True, index=True, nullable=False)
    campus_id = Column(Integer, ForeignKey("campuses.id"), nullable=False)
    is_active = Column(Boolean, default=True)

    campus = relationship("Campus", back_populates="departments")
    programs = relationship("Program", back_populates="department")

class Program(BaseModel):
    __tablename__ = "programs"

    name = Column(String, nullable=False)
    code = Column(String, unique=True, index=True, nullable=False)
    department_id = Column(Integer, ForeignKey("departments.id"), nullable=False)
    duration_years = Column(Integer, nullable=False)
    is_active = Column(Boolean, default=True)

    department = relationship("Department", back_populates="programs")
    batches = relationship("Batch", back_populates="program")

class Batch(BaseModel):
    __tablename__ = "batches"

    name = Column(String, nullable=False) # e.g. "Class of 2024"
    start_year = Column(Integer, nullable=False)
    end_year = Column(Integer, nullable=False)
    program_id = Column(Integer, ForeignKey("programs.id"), nullable=False)
    is_active = Column(Boolean, default=True)

    program = relationship("Program", back_populates="batches")
    semesters = relationship("Semester", back_populates="batch")

class Semester(BaseModel):
    __tablename__ = "semesters"

    name = Column(String, nullable=False) # e.g. "Fall 2023", "Semester 1"
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    batch_id = Column(Integer, ForeignKey("batches.id"), nullable=False)
    is_active = Column(Boolean, default=True)

    batch = relationship("Batch", back_populates="semesters")
