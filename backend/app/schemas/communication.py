from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class AnnouncementBase(BaseModel):
    title: str
    content: str
    target_audience: str
    priority: Optional[str] = "NORMAL"
    expires_at: Optional[datetime] = None

class AnnouncementCreate(AnnouncementBase):
    pass

class AnnouncementResponse(AnnouncementBase):
    id: int
    author_id: int
    created_at: datetime
    class Config:
        from_attributes = True

class NotificationBase(BaseModel):
    user_id: int
    title: str
    message: str
    link: Optional[str] = None

class NotificationCreate(NotificationBase):
    pass

class NotificationResponse(NotificationBase):
    id: int
    is_read: bool
    created_at: datetime
    class Config:
        from_attributes = True

class DirectMessageBase(BaseModel):
    receiver_id: int
    message: str

class DirectMessageCreate(DirectMessageBase):
    pass

class DirectMessageResponse(DirectMessageBase):
    id: int
    sender_id: int
    is_read: bool
    sent_at: datetime
    class Config:
        from_attributes = True
