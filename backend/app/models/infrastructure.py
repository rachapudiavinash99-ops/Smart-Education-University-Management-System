from sqlalchemy import Column, String, Integer, ForeignKey, Date, Boolean, Enum
from sqlalchemy.orm import relationship
import enum
from app.models.base import BaseModel

class BookStatusEnum(str, enum.Enum):
    AVAILABLE = "AVAILABLE"
    ISSUED = "ISSUED"
    LOST = "LOST"
    MAINTENANCE = "MAINTENANCE"

class LibraryBook(BaseModel):
    __tablename__ = "library_books"

    title = Column(String, nullable=False, index=True)
    author = Column(String, nullable=False)
    isbn = Column(String, unique=True, index=True, nullable=False)
    publisher = Column(String, nullable=True)
    edition = Column(String, nullable=True)
    status = Column(Enum(BookStatusEnum), default=BookStatusEnum.AVAILABLE)

class BookIssue(BaseModel):
    __tablename__ = "book_issues"

    book_id = Column(Integer, ForeignKey("library_books.id"), nullable=False)
    student_id = Column(Integer, ForeignKey("student_profiles.id"), nullable=False)
    issue_date = Column(Date, nullable=False)
    due_date = Column(Date, nullable=False)
    return_date = Column(Date, nullable=True)
    fine_amount = Column(Integer, default=0)

    book = relationship("LibraryBook")
    student = relationship("StudentProfile")

class Hostel(BaseModel):
    __tablename__ = "hostels"

    name = Column(String, nullable=False, unique=True)
    campus_id = Column(Integer, ForeignKey("campuses.id"), nullable=False)
    warden_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    total_capacity = Column(Integer, nullable=False)

    campus = relationship("Campus")
    warden = relationship("User")

class HostelRoom(BaseModel):
    __tablename__ = "hostel_rooms"

    hostel_id = Column(Integer, ForeignKey("hostels.id"), nullable=False)
    room_number = Column(String, nullable=False)
    capacity = Column(Integer, default=2)
    is_ac = Column(Boolean, default=False)

    hostel = relationship("Hostel")

class RoomAllocation(BaseModel):
    __tablename__ = "room_allocations"

    room_id = Column(Integer, ForeignKey("hostel_rooms.id"), nullable=False)
    student_id = Column(Integer, ForeignKey("student_profiles.id"), nullable=False)
    allocation_date = Column(Date, nullable=False)
    vacate_date = Column(Date, nullable=True)

    room = relationship("HostelRoom")
    student = relationship("StudentProfile")

class TransportRoute(BaseModel):
    __tablename__ = "transport_routes"

    route_name = Column(String, nullable=False)
    vehicle_number = Column(String, nullable=False)
    driver_name = Column(String, nullable=False)
    driver_phone = Column(String, nullable=False)
    capacity = Column(Integer, nullable=False)

class TransportAllocation(BaseModel):
    __tablename__ = "transport_allocations"

    route_id = Column(Integer, ForeignKey("transport_routes.id"), nullable=False)
    student_id = Column(Integer, ForeignKey("student_profiles.id"), nullable=False)
    pickup_point = Column(String, nullable=False)
    allocation_date = Column(Date, nullable=False)

    route = relationship("TransportRoute")
    student = relationship("StudentProfile")
