from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime

from app import schemas, models
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.get("/audit-logs", response_model=List[schemas.AuditLogResponse])
def get_audit_logs(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    logs = db.query(models.AuditLog).order_by(models.AuditLog.timestamp.desc()).offset(skip).limit(limit).all()
    return logs

@router.post("/blocked-ips", response_model=schemas.BlockedIPResponse)
def block_ip(
    *,
    db: Session = Depends(deps.get_db),
    ip_in: schemas.BlockedIPCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    blocked_ip_data = ip_in.model_dump()
    blocked_ip_data["blocked_by"] = current_user.id
    blocked_ip = models.BlockedIP(**blocked_ip_data)
    db.add(blocked_ip)
    
    # Audit trail
    audit = models.AuditLog(
        user_id=current_user.id,
        action="BLOCK_IP",
        entity="SECURITY",
        details={"ip": ip_in.ip_address, "reason": ip_in.reason}
    )
    db.add(audit)
    
    db.commit()
    db.refresh(blocked_ip)
    return blocked_ip
