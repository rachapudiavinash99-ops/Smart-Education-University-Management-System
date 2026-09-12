from sqlalchemy import Column, String, Integer, ForeignKey, DateTime, Text, JSON
from sqlalchemy.orm import relationship
from datetime import datetime
from app.models.base import BaseModel

class AuditLog(BaseModel):
    __tablename__ = "audit_logs"

    user_id = Column(Integer, ForeignKey("users.id"), nullable=True, index=True)
    action = Column(String, nullable=False, index=True)
    entity = Column(String, nullable=False) # e.g., "USER", "FEE_INVOICE", "EXAM_RESULT"
    entity_id = Column(Integer, nullable=True)
    details = Column(JSON, nullable=True) # Store payload or old/new changes
    ip_address = Column(String, nullable=True)
    timestamp = Column(DateTime(timezone=True), default=datetime.utcnow)

    user = relationship("User")

class UserSession(BaseModel):
    __tablename__ = "user_sessions"

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    token = Column(String, unique=True, index=True, nullable=False)
    ip_address = Column(String, nullable=True)
    user_agent = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    expires_at = Column(DateTime(timezone=True), nullable=False)
    
    user = relationship("User")

class BlockedIP(BaseModel):
    __tablename__ = "blocked_ips"

    ip_address = Column(String, unique=True, index=True, nullable=False)
    reason = Column(String, nullable=True)
    blocked_at = Column(DateTime(timezone=True), default=datetime.utcnow)
    blocked_by = Column(Integer, ForeignKey("users.id"), nullable=True)
