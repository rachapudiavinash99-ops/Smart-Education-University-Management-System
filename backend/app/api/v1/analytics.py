from typing import Any
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app import schemas, models
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.get("/dashboard/summary")
def get_dashboard_summary(
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    # Gather aggregate metrics across the system
    total_students = db.query(func.count(models.StudentProfile.id)).scalar() or 0
    total_faculty = db.query(func.count(models.FacultyProfile.id)).scalar() or 0
    total_campuses = db.query(func.count(models.Campus.id)).scalar() or 0
    
    # Financial metrics
    total_revenue_query = db.query(func.sum(models.FeePayment.amount)).scalar()
    total_revenue = float(total_revenue_query) if total_revenue_query else 0.0

    # Library metrics
    total_books = db.query(func.count(models.LibraryBook.id)).scalar() or 0
    
    # Active Jobs
    active_jobs = db.query(func.count(models.JobPosting.id)).filter(models.JobPosting.is_active == True).scalar() or 0

    return {
        "metrics": {
            "total_students": total_students,
            "total_faculty": total_faculty,
            "total_campuses": total_campuses,
            "total_revenue_collected": total_revenue,
            "library_books": total_books,
            "active_job_postings": active_jobs
        },
        "trends": {
            "admissions_this_year": "+15%",
            "revenue_growth": "+8.4%",
            "placement_rate": "89%"
        }
    }

@router.get("/reports/export")
def generate_report(
    report_type: str,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    """
    Simulates a long-running report generation job (e.g. CSV/PDF export).
    """
    return {
        "status": "success",
        "message": f"Report of type '{report_type}' has been scheduled for generation.",
        "download_url": f"/exports/reports/{report_type}_latest.pdf"
    }
