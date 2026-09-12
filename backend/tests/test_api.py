from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to Smart Education & University Management System API"}

def test_unauthorized_access():
    response = client.get("/api/v1/users/me")
    assert response.status_code == 401
    assert response.json() == {"detail": "Not authenticated"}

def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}
