from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app import auth, models, schemas

router = APIRouter(tags=["Points"])

@router.get("/points-config")
def get_points_config(
    current_user: models.User = Depends(auth.get_current_hod_user),
    db: Session = Depends(get_db)
):
    # Mock data for now as per minimal setup
    return [
        {"id": 1, "type": "Certificate (Course)", "points": 50},
        {"id": 2, "type": "Certificate (Internship)", "points": 100},
        {"id": 3, "type": "Project (Hackathon)", "points": 150},
        {"id": 4, "type": "Research Paper", "points": 200}
    ]

@router.post("/points-config")
def update_points_config(
    data: schemas.PointConfigBase,
    current_user: models.User = Depends(auth.get_current_hod_user),
    db: Session = Depends(get_db)
):
    # Logic to update
    return {"message": "Config updated"}
