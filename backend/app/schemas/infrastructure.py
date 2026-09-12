from pydantic import BaseModel
from typing import Optional, List
from datetime import date

class LibraryBookBase(BaseModel):
    title: str
    author: str
    isbn: str
    publisher: Optional[str] = None
    edition: Optional[str] = None
    status: Optional[str] = "AVAILABLE"

class LibraryBookCreate(LibraryBookBase):
    pass

class LibraryBookResponse(LibraryBookBase):
    id: int
    class Config:
        from_attributes = True

class HostelBase(BaseModel):
    name: str
    campus_id: int
    warden_id: Optional[int] = None
    total_capacity: int

class HostelCreate(HostelBase):
    pass

class HostelResponse(HostelBase):
    id: int
    class Config:
        from_attributes = True

class TransportRouteBase(BaseModel):
    route_name: str
    vehicle_number: str
    driver_name: str
    driver_phone: str
    capacity: int

class TransportRouteCreate(TransportRouteBase):
    pass

class TransportRouteResponse(TransportRouteBase):
    id: int
    class Config:
        from_attributes = True
