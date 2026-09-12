from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import uuid
from datetime import date

from app import schemas, models
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.post("/invoices", response_model=schemas.FeeInvoiceResponse)
def create_invoice(
    *,
    db: Session = Depends(deps.get_db),
    invoice_in: schemas.FeeInvoiceCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    invoice_data = invoice_in.model_dump()
    invoice_data["invoice_number"] = f"INV-{uuid.uuid4().hex[:8].upper()}"
    invoice = models.FeeInvoice(**invoice_data)
    db.add(invoice)
    db.commit()
    db.refresh(invoice)
    return invoice

@router.post("/payments", response_model=schemas.FeePaymentResponse)
def process_payment(
    *,
    db: Session = Depends(deps.get_db),
    payment_in: schemas.FeePaymentCreate,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    # Basic payment logic
    invoice = db.query(models.FeeInvoice).filter(models.FeeInvoice.id == payment_in.invoice_id).first()
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")

    payment_data = payment_in.model_dump()
    payment_data["receipt_number"] = f"REC-{uuid.uuid4().hex[:8].upper()}"
    payment_data["payment_date"] = date.today()
    
    payment = models.FeePayment(**payment_data)
    db.add(payment)
    
    # Update Invoice
    invoice.paid_amount = float(invoice.paid_amount) + float(payment.amount)
    if invoice.paid_amount >= invoice.total_amount:
        invoice.status = models.finance.PaymentStatusEnum.PAID
    else:
        invoice.status = models.finance.PaymentStatusEnum.PARTIAL
        
    db.commit()
    db.refresh(payment)
    return payment

@router.get("/student/{student_id}/invoices", response_model=List[schemas.FeeInvoiceResponse])
def get_student_invoices(
    student_id: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    invoices = db.query(models.FeeInvoice).filter(models.FeeInvoice.student_id == student_id).all()
    return invoices
