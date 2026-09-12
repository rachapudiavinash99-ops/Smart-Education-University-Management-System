from pydantic import BaseModel
from typing import Optional, List
from datetime import date
from decimal import Decimal

class FeeStructureBase(BaseModel):
    name: str
    fee_type: str
    program_id: int
    batch_id: int
    amount: Decimal
    is_active: Optional[bool] = True

class FeeStructureCreate(FeeStructureBase):
    pass

class FeeStructureResponse(FeeStructureBase):
    id: int
    class Config:
        from_attributes = True

class FeeInvoiceBase(BaseModel):
    student_id: int
    fee_structure_id: int
    issue_date: date
    due_date: date
    total_amount: Decimal

class FeeInvoiceCreate(FeeInvoiceBase):
    pass

class FeeInvoiceResponse(FeeInvoiceBase):
    id: int
    invoice_number: str
    paid_amount: Decimal
    status: str
    class Config:
        from_attributes = True

class FeePaymentBase(BaseModel):
    invoice_id: int
    amount: Decimal
    payment_method: str
    transaction_id: Optional[str] = None

class FeePaymentCreate(FeePaymentBase):
    pass

class FeePaymentResponse(FeePaymentBase):
    id: int
    payment_date: date
    receipt_number: str
    class Config:
        from_attributes = True
