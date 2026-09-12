from sqlalchemy import Column, String, Integer, ForeignKey, Date, Time, Float, Enum, Boolean
from sqlalchemy.orm import relationship
import enum
from app.models.base import BaseModel

class ExamType(str, enum.Enum):
    INTERNAL = "INTERNAL"
    MIDTERM = "MIDTERM"
    SEMESTER = "SEMESTER"
    PRACTICAL = "PRACTICAL"

class Exam(BaseModel):
    __tablename__ = "exams"

    name = Column(String, nullable=False) # e.g. "Fall 2023 Midterms"
    exam_type = Column(Enum(ExamType), nullable=False)
    semester_id = Column(Integer, ForeignKey("semesters.id"), nullable=False)
    is_published = Column(Boolean, default=False)

    semester = relationship("Semester")
    schedules = relationship("ExamSchedule", back_populates="exam")

class ExamSchedule(BaseModel):
    __tablename__ = "exam_schedules"

    exam_id = Column(Integer, ForeignKey("exams.id"), nullable=False)
    subject_id = Column(Integer, ForeignKey("subjects.id"), nullable=False)
    classroom_id = Column(Integer, ForeignKey("classrooms.id"), nullable=True)
    exam_date = Column(Date, nullable=False)
    start_time = Column(Time, nullable=False)
    end_time = Column(Time, nullable=False)
    max_marks = Column(Integer, default=100)
    passing_marks = Column(Integer, default=40)

    exam = relationship("Exam", back_populates="schedules")
    subject = relationship("Subject")
    classroom = relationship("Classroom")

class ExamResult(BaseModel):
    __tablename__ = "exam_results"

    schedule_id = Column(Integer, ForeignKey("exam_schedules.id"), nullable=False)
    student_id = Column(Integer, ForeignKey("student_profiles.id"), nullable=False)
    marks_obtained = Column(Float, nullable=False)
    grade = Column(String, nullable=True) # e.g. "A+", "B", "F"
    is_absent = Column(Boolean, default=False)
    remarks = Column(String, nullable=True)

    schedule = relationship("ExamSchedule")
    student = relationship("StudentProfile")
