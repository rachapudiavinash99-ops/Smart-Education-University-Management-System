import enum
from sqlalchemy import Column, String, Boolean, Enum
from app.models.base import BaseModel

class UserRole(str, enum.Enum):
    SUPER_ADMIN = "SUPER_ADMIN"
    UNIVERSITY_ADMIN = "UNIVERSITY_ADMIN"
    DEPARTMENT_ADMIN = "DEPARTMENT_ADMIN"
    PRINCIPAL = "PRINCIPAL"
    DEAN = "DEAN"
    HOD = "HOD"
    FACULTY = "FACULTY"
    STUDENT = "STUDENT"
    PARENT = "PARENT"
    ACCOUNTANT = "ACCOUNTANT"
    LIBRARIAN = "LIBRARIAN"
    HOSTEL_WARDEN = "HOSTEL_WARDEN"
    TRANSPORT_MANAGER = "TRANSPORT_MANAGER"
    PLACEMENT_OFFICER = "PLACEMENT_OFFICER"
    EXAMINATION_OFFICER = "EXAMINATION_OFFICER"
    ADMISSION_OFFICER = "ADMISSION_OFFICER"
    HR_STAFF = "HR_STAFF"
    SUPPORT_STAFF = "SUPPORT_STAFF"

class User(BaseModel):
    __tablename__ = "users"

    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String, nullable=False)
    role = Column(Enum(UserRole), nullable=False)
    is_active = Column(Boolean, default=True)
    is_superuser = Column(Boolean, default=False)
    phone_number = Column(String, nullable=True)
