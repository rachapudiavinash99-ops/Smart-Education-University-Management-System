from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import schemas, models
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.get("/profiles", response_model=List[schemas.FacultyProfileResponse])
def read_faculty_profiles(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    profiles = db.query(models.FacultyProfile).offset(skip).limit(limit).all()
    return profiles

@router.post("/profiles", response_model=schemas.FacultyProfileResponse)
def create_faculty_profile(
    *,
    db: Session = Depends(deps.get_db),
    profile_in: schemas.FacultyProfileCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    profile = models.FacultyProfile(**profile_in.model_dump())
    db.add(profile)
    db.commit()
    db.refresh(profile)
    return profile
