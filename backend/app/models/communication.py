from sqlalchemy import Column, String, Integer, ForeignKey, DateTime, Boolean, Enum, Text
from sqlalchemy.orm import relationship
import enum
from datetime import datetime
from app.models.base import BaseModel

class PriorityEnum(str, enum.Enum):
    LOW = "LOW"
    NORMAL = "NORMAL"
    HIGH = "HIGH"
    URGENT = "URGENT"

class Announcement(BaseModel):
    __tablename__ = "announcements"

    title = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    author_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    target_audience = Column(String, nullable=False) # e.g., "ALL", "STUDENTS", "FACULTY"
    priority = Column(Enum(PriorityEnum), default=PriorityEnum.NORMAL)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    expires_at = Column(DateTime(timezone=True), nullable=True)

    author = relationship("User")

class Notification(BaseModel):
    __tablename__ = "notifications"

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    title = Column(String, nullable=False)
    message = Column(Text, nullable=False)
    link = Column(String, nullable=True) # URL to redirect when clicked
    is_read = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)

    user = relationship("User", backref="notifications")

class DirectMessage(BaseModel):
    __tablename__ = "direct_messages"

    sender_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    receiver_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    message = Column(Text, nullable=False)
    is_read = Column(Boolean, default=False)
    sent_at = Column(DateTime(timezone=True), default=datetime.utcnow)

    sender = relationship("User", foreign_keys=[sender_id])
    receiver = relationship("User", foreign_keys=[receiver_id])
