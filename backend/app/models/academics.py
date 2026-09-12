from sqlalchemy import Column, String, Integer, ForeignKey, Boolean, Time, Enum
from sqlalchemy.orm import relationship
import enum
from app.models.base import BaseModel

class SubjectType(str, enum.Enum):
    THEORY = "THEORY"
    PRACTICAL = "PRACTICAL"
    PROJECT = "PROJECT"

class Subject(BaseModel):
    __tablename__ = "subjects"

    name = Column(String, nullable=False)
    code = Column(String, unique=True, index=True, nullable=False)
    credits = Column(Integer, nullable=False)
    subject_type = Column(Enum(SubjectType), default=SubjectType.THEORY)
    department_id = Column(Integer, ForeignKey("departments.id"), nullable=False)
    is_active = Column(Boolean, default=True)

    department = relationship("Department")
    sections = relationship("Section", back_populates="subject")

class Section(BaseModel):
    __tablename__ = "sections"

    name = Column(String, nullable=False) # e.g. "Section A"
    subject_id = Column(Integer, ForeignKey("subjects.id"), nullable=False)
    semester_id = Column(Integer, ForeignKey("semesters.id"), nullable=False)
    faculty_id = Column(Integer, ForeignKey("users.id"), nullable=True) # Assigned Faculty
    capacity = Column(Integer, default=60)

    subject = relationship("Subject", back_populates="sections")
    semester = relationship("Semester")
    faculty = relationship("User")
    timetables = relationship("Timetable", back_populates="section")

class Classroom(BaseModel):
    __tablename__ = "classrooms"

    name = Column(String, nullable=False) # e.g. "Room 101"
    building = Column(String, nullable=False)
    campus_id = Column(Integer, ForeignKey("campuses.id"), nullable=False)
    capacity = Column(Integer, nullable=False)
    is_lab = Column(Boolean, default=False)

    campus = relationship("Campus")

class DayOfWeek(str, enum.Enum):
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"

class Timetable(BaseModel):
    __tablename__ = "timetables"

    section_id = Column(Integer, ForeignKey("sections.id"), nullable=False)
    classroom_id = Column(Integer, ForeignKey("classrooms.id"), nullable=False)
    day_of_week = Column(Enum(DayOfWeek), nullable=False)
    start_time = Column(Time, nullable=False)
    end_time = Column(Time, nullable=False)

    section = relationship("Section", back_populates="timetables")
    classroom = relationship("Classroom")
