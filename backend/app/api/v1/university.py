from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import schemas, models
from app.api import deps
from app.models.user import User

router = APIRouter()

# Campus Endpoints
@router.get("/campuses", response_model=List[schemas.CampusResponse])
def read_campuses(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    campuses = db.query(models.Campus).offset(skip).limit(limit).all()
    return campuses

@router.post("/campuses", response_model=schemas.CampusResponse)
def create_campus(
    *,
    db: Session = Depends(deps.get_db),
    campus_in: schemas.CampusCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    campus = models.Campus(**campus_in.model_dump())
    db.add(campus)
    db.commit()
    db.refresh(campus)
    return campus

# Department Endpoints
@router.get("/departments", response_model=List[schemas.DepartmentResponse])
def read_departments(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    departments = db.query(models.Department).offset(skip).limit(limit).all()
    return departments

@router.post("/departments", response_model=schemas.DepartmentResponse)
def create_department(
    *,
    db: Session = Depends(deps.get_db),
    department_in: schemas.DepartmentCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    department = models.Department(**department_in.model_dump())
    db.add(department)
    db.commit()
    db.refresh(department)
    return department
