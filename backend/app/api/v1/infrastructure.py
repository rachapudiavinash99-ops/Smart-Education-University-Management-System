from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import schemas, models
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.post("/library/books", response_model=schemas.LibraryBookResponse)
def create_book(
    *,
    db: Session = Depends(deps.get_db),
    book_in: schemas.LibraryBookCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    book = models.LibraryBook(**book_in.model_dump())
    db.add(book)
    db.commit()
    db.refresh(book)
    return book

@router.get("/library/books", response_model=List[schemas.LibraryBookResponse])
def get_books(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    books = db.query(models.LibraryBook).offset(skip).limit(limit).all()
    return books

@router.post("/hostels", response_model=schemas.HostelResponse)
def create_hostel(
    *,
    db: Session = Depends(deps.get_db),
    hostel_in: schemas.HostelCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    hostel = models.Hostel(**hostel_in.model_dump())
    db.add(hostel)
    db.commit()
    db.refresh(hostel)
    return hostel

@router.post("/transport/routes", response_model=schemas.TransportRouteResponse)
def create_route(
    *,
    db: Session = Depends(deps.get_db),
    route_in: schemas.TransportRouteCreate,
    current_user: User = Depends(deps.get_current_active_superuser),
) -> Any:
    route = models.TransportRoute(**route_in.model_dump())
    db.add(route)
    db.commit()
    db.refresh(route)
    return route
