from sqlalchemy import Column, String, Integer, ForeignKey, Date, Boolean, Enum
from sqlalchemy.orm import relationship
import enum
from app.models.base import BaseModel

class AttendanceStatus(str, enum.Enum):
    PRESENT = "PRESENT"
    ABSENT = "ABSENT"
    LATE = "LATE"
    EXCUSED = "EXCUSED"

class Attendance(BaseModel):
    __tablename__ = "attendance"

    date = Column(Date, nullable=False, index=True)
    student_id = Column(Integer, ForeignKey("student_profiles.id"), nullable=False)
    section_id = Column(Integer, ForeignKey("sections.id"), nullable=False)
    faculty_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    status = Column(Enum(AttendanceStatus), nullable=False)
    remarks = Column(String, nullable=True)

    student = relationship("StudentProfile")
    section = relationship("Section")
    faculty = relationship("User")
