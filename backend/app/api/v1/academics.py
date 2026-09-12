from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import schemas, models
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.get("/subjects", response_model=List[schemas.SubjectResponse])
def read_subjects(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    subjects = db.query(models.Subject).offset(skip).limit(limit).all()
    return subjects

@router.post("/subjects", response_model=schemas.SubjectResponse)
def create_subject(
    *,
    db: Session = Depends(deps.get_db),
    subject_in: schemas.SubjectCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    subject = models.Subject(**subject_in.model_dump())
    db.add(subject)
    db.commit()
    db.refresh(subject)
    return subject

@router.get("/sections", response_model=List[schemas.SectionResponse])
def read_sections(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    sections = db.query(models.Section).offset(skip).limit(limit).all()
    return sections
