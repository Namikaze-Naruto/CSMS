from fastapi import APIRouter, Depends, UploadFile, File, Form, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app import auth, models
import shutil
import os

router = APIRouter(tags=["Uploads"])

UPLOAD_DIR = "uploads"

@router.post("/upload")
async def upload_certificate(
    title: str = Form(...),
    type: str = Form(...),
    provider: str = Form(...),
    file: UploadFile = File(...),
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db)
):
    if not current_user.student_profile:
        raise HTTPException(status_code=400, detail="User is not a student")
        
    file_location = f"{UPLOAD_DIR}/{file.filename}"
    with open(file_location, "wb+") as file_object:
        shutil.copyfileobj(file.file, file_object)
        
    new_cert = models.Certificate(
        student_id=current_user.student_profile.id,
        title=title,
        type=type,
        provider=provider,
        file_url=file_location,
        status="pending"
    )
    db.add(new_cert)
    db.commit()
    db.refresh(new_cert)
    
    return {"message": "File uploaded successfully", "id": new_cert.id}
