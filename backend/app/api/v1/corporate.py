from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import date

from app import schemas, models
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.post("/companies", response_model=schemas.CompanyResponse)
def create_company(
    *,
    db: Session = Depends(deps.get_db),
    company_in: schemas.CompanyCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    company = models.Company(**company_in.model_dump())
    db.add(company)
    db.commit()
    db.refresh(company)
    return company

@router.get("/jobs", response_model=List[schemas.JobPostingResponse])
def get_job_postings(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    jobs = db.query(models.JobPosting).filter(models.JobPosting.is_active == True).offset(skip).limit(limit).all()
    return jobs

@router.post("/apply", response_model=schemas.PlacementApplicationResponse)
def apply_for_job(
    *,
    db: Session = Depends(deps.get_db),
    application_in: schemas.PlacementApplicationCreate,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    application_data = application_in.model_dump()
    application_data["applied_date"] = date.today()
    application = models.PlacementApplication(**application_data)
    db.add(application)
    db.commit()
    db.refresh(application)
    return application
