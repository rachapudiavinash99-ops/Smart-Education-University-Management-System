from .user import UserBase, UserCreate, UserUpdate, UserResponse
from .token import Token, TokenPayload
from .university import (
    CampusBase, CampusCreate, CampusResponse,
    DepartmentBase, DepartmentCreate, DepartmentResponse,
    ProgramBase, ProgramCreate, ProgramResponse
)
from .academics import SubjectBase, SubjectCreate, SubjectResponse, SectionBase, SectionCreate, SectionResponse
from .faculty import FacultyProfileBase, FacultyProfileCreate, FacultyProfileResponse
from .attendance import AttendanceBase, AttendanceCreate, AttendanceResponse, AttendanceSummary
from .lms import (
    AssignmentBase, AssignmentCreate, AssignmentResponse,
    SubmissionBase, SubmissionCreate, SubmissionGrade, SubmissionResponse
)
from .examination import (
    ExamBase, ExamCreate, ExamResponse,
    ExamScheduleBase, ExamScheduleCreate, ExamScheduleResponse,
    ExamResultBase, ExamResultCreate, ExamResultResponse
)
from .finance import (
    FeeStructureBase, FeeStructureCreate, FeeStructureResponse,
    FeeInvoiceBase, FeeInvoiceCreate, FeeInvoiceResponse,
    FeePaymentBase, FeePaymentCreate, FeePaymentResponse
)
from .infrastructure import (
    LibraryBookBase, LibraryBookCreate, LibraryBookResponse,
    HostelBase, HostelCreate, HostelResponse,
    TransportRouteBase, TransportRouteCreate, TransportRouteResponse
)
from .corporate import (
    CompanyBase, CompanyCreate, CompanyResponse,
    JobPostingBase, JobPostingCreate, JobPostingResponse,
    PlacementApplicationBase, PlacementApplicationCreate, PlacementApplicationResponse,
    UniversityEventBase, UniversityEventCreate, UniversityEventResponse
)
