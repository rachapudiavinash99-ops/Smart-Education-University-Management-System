from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from datetime import datetime

class AuditLogBase(BaseModel):
    user_id: Optional[int] = None
    action: str
    entity: str
    entity_id: Optional[int] = None
    details: Optional[Dict[str, Any]] = None
    ip_address: Optional[str] = None

class AuditLogCreate(AuditLogBase):
    pass

class AuditLogResponse(AuditLogBase):
    id: int
    timestamp: datetime
    class Config:
        from_attributes = True

class BlockedIPBase(BaseModel):
    ip_address: str
    reason: Optional[str] = None

class BlockedIPCreate(BlockedIPBase):
    pass

class BlockedIPResponse(BlockedIPBase):
    id: int
    blocked_at: datetime
    blocked_by: Optional[int] = None
    class Config:
        from_attributes = True
