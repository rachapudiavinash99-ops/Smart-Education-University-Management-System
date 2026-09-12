from sqlalchemy import Column, String, Integer, ForeignKey, Date, Numeric, Boolean, Enum
from sqlalchemy.orm import relationship
import enum
from app.models.base import BaseModel

class FeeTypeEnum(str, enum.Enum):
    TUITION = "TUITION"
    HOSTEL = "HOSTEL"
    TRANSPORT = "TRANSPORT"
    EXAMINATION = "EXAMINATION"
    LIBRARY = "LIBRARY"
    OTHER = "OTHER"

class PaymentStatusEnum(str, enum.Enum):
    PENDING = "PENDING"
    PARTIAL = "PARTIAL"
    PAID = "PAID"
    OVERDUE = "OVERDUE"

class FeeStructure(BaseModel):
    __tablename__ = "fee_structures"

    name = Column(String, nullable=False)
    fee_type = Column(Enum(FeeTypeEnum), nullable=False)
    program_id = Column(Integer, ForeignKey("programs.id"), nullable=False)
    batch_id = Column(Integer, ForeignKey("batches.id"), nullable=False)
    amount = Column(Numeric(10, 2), nullable=False)
    is_active = Column(Boolean, default=True)

    program = relationship("Program")
    batch = relationship("Batch")

class FeeInvoice(BaseModel):
    __tablename__ = "fee_invoices"

    student_id = Column(Integer, ForeignKey("student_profiles.id"), nullable=False)
    fee_structure_id = Column(Integer, ForeignKey("fee_structures.id"), nullable=False)
    invoice_number = Column(String, unique=True, index=True, nullable=False)
    issue_date = Column(Date, nullable=False)
    due_date = Column(Date, nullable=False)
    total_amount = Column(Numeric(10, 2), nullable=False)
    paid_amount = Column(Numeric(10, 2), default=0)
    status = Column(Enum(PaymentStatusEnum), default=PaymentStatusEnum.PENDING)

    student = relationship("StudentProfile")
    fee_structure = relationship("FeeStructure")
    payments = relationship("FeePayment", back_populates="invoice")

class FeePayment(BaseModel):
    __tablename__ = "fee_payments"

    invoice_id = Column(Integer, ForeignKey("fee_invoices.id"), nullable=False)
    payment_date = Column(Date, nullable=False)
    amount = Column(Numeric(10, 2), nullable=False)
    payment_method = Column(String, nullable=False) # e.g. "CASH", "CARD", "UPI", "BANK_TRANSFER"
    transaction_id = Column(String, nullable=True)
    receipt_number = Column(String, unique=True, index=True, nullable=False)

    invoice = relationship("FeeInvoice", back_populates="payments")

class Scholarship(BaseModel):
    __tablename__ = "scholarships"

    name = Column(String, nullable=False)
    description = Column(String, nullable=True)
    discount_percentage = Column(Numeric(5, 2), nullable=False)
    is_active = Column(Boolean, default=True)

class StudentScholarship(BaseModel):
    __tablename__ = "student_scholarships"

    student_id = Column(Integer, ForeignKey("student_profiles.id"), nullable=False)
    scholarship_id = Column(Integer, ForeignKey("scholarships.id"), nullable=False)
    granted_date = Column(Date, nullable=False)

    student = relationship("StudentProfile")
    scholarship = relationship("Scholarship")
