from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime

from app import schemas, models
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.post("/announcements", response_model=schemas.AnnouncementResponse)
def create_announcement(
    *,
    db: Session = Depends(deps.get_db),
    announcement_in: schemas.AnnouncementCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    announcement_data = announcement_in.model_dump()
    announcement_data["author_id"] = current_user.id
    announcement = models.Announcement(**announcement_data)
    db.add(announcement)
    db.commit()
    db.refresh(announcement)
    return announcement

@router.get("/announcements", response_model=List[schemas.AnnouncementResponse])
def get_announcements(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    announcements = db.query(models.Announcement).order_by(models.Announcement.created_at.desc()).offset(skip).limit(limit).all()
    return announcements

@router.post("/messages", response_model=schemas.DirectMessageResponse)
def send_message(
    *,
    db: Session = Depends(deps.get_db),
    message_in: schemas.DirectMessageCreate,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    message_data = message_in.model_dump()
    message_data["sender_id"] = current_user.id
    message = models.DirectMessage(**message_data)
    db.add(message)
    db.commit()
    db.refresh(message)
    return message
