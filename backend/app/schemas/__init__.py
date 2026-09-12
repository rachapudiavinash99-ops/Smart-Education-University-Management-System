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
