from fastapi import APIRouter

from app.api.v1 import auth, users, university, academics, faculty, attendance

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(university.router, prefix="/university", tags=["university"])
api_router.include_router(academics.router, prefix="/academics", tags=["academics"])
api_router.include_router(faculty.router, prefix="/faculty", tags=["faculty"])
api_router.include_router(attendance.router, prefix="/attendance", tags=["attendance"])
