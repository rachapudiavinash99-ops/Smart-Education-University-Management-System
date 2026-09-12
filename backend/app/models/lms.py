from sqlalchemy import Column, String, Integer, ForeignKey, DateTime, Text, Enum
from sqlalchemy.orm import relationship
import enum
from app.models.base import BaseModel

class AssignmentStatus(str, enum.Enum):
    DRAFT = "DRAFT"
    PUBLISHED = "PUBLISHED"

class SubmissionStatus(str, enum.Enum):
    SUBMITTED = "SUBMITTED"
    LATE = "LATE"
    GRADED = "GRADED"
    RETURNED = "RETURNED"

class CourseModule(BaseModel):
    __tablename__ = "course_modules"

    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    subject_id = Column(Integer, ForeignKey("subjects.id"), nullable=False)
    order_index = Column(Integer, default=0)

    subject = relationship("Subject")
    materials = relationship("LearningMaterial", back_populates="module")

class LearningMaterial(BaseModel):
    __tablename__ = "learning_materials"

    title = Column(String, nullable=False)
    material_type = Column(String, nullable=False) # e.g., "VIDEO", "PDF", "NOTE"
    content_url = Column(String, nullable=False)
    module_id = Column(Integer, ForeignKey("course_modules.id"), nullable=False)

    module = relationship("CourseModule", back_populates="materials")

class Assignment(BaseModel):
    __tablename__ = "assignments"

    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    subject_id = Column(Integer, ForeignKey("subjects.id"), nullable=False)
    faculty_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    max_marks = Column(Integer, default=100)
    deadline = Column(DateTime(timezone=True), nullable=False)
    status = Column(Enum(AssignmentStatus), default=AssignmentStatus.DRAFT)
    attachment_url = Column(String, nullable=True)

    subject = relationship("Subject")
    faculty = relationship("User")
    submissions = relationship("AssignmentSubmission", back_populates="assignment")

class AssignmentSubmission(BaseModel):
    __tablename__ = "assignment_submissions"

    assignment_id = Column(Integer, ForeignKey("assignments.id"), nullable=False)
    student_id = Column(Integer, ForeignKey("student_profiles.id"), nullable=False)
    submission_url = Column(String, nullable=False)
    status = Column(Enum(SubmissionStatus), default=SubmissionStatus.SUBMITTED)
    marks_obtained = Column(Integer, nullable=True)
    faculty_feedback = Column(Text, nullable=True)

    assignment = relationship("Assignment", back_populates="submissions")
    student = relationship("StudentProfile")
