from fastapi import APIRouter

from app.api.v1 import auth, users, university, academics, faculty, attendance, lms, examination, finance, infrastructure, corporate, communication, analytics

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(university.router, prefix="/university", tags=["university"])
api_router.include_router(academics.router, prefix="/academics", tags=["academics"])
api_router.include_router(faculty.router, prefix="/faculty", tags=["faculty"])
api_router.include_router(attendance.router, prefix="/attendance", tags=["attendance"])
api_router.include_router(lms.router, prefix="/lms", tags=["lms"])
api_router.include_router(examination.router, prefix="/examination", tags=["examination"])
api_router.include_router(finance.router, prefix="/finance", tags=["finance"])
api_router.include_router(infrastructure.router, prefix="/infrastructure", tags=["infrastructure"])
api_router.include_router(corporate.router, prefix="/corporate", tags=["corporate"])
api_router.include_router(communication.router, prefix="/communication", tags=["communication"])
api_router.include_router(analytics.router, prefix="/analytics", tags=["analytics"])
