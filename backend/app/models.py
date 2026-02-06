from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, Enum, JSON
from sqlalchemy.orm import relationship
import enum
from datetime import datetime
from .database import Base

class UserRole(str, enum.Enum):
    STUDENT = "student"
    FACULTY = "faculty"
    HOD = "hod"
    COORDINATOR = "coordinator"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    full_name = Column(String)
    role = Column(String)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    student_profile = relationship("StudentProfile", back_populates="user", uselist=False)
    coordinator_profile = relationship("CoordinatorProfile", back_populates="user", uselist=False)
    faculty_profile = relationship("FacultyProfile", back_populates="user", uselist=False)

class StudentProfile(Base):
    __tablename__ = "student_profiles"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    department = Column(String)
    enrollment_number = Column(String, unique=True)
    current_semester = Column(Integer)
    total_points = Column(Integer, default=0)
    
    user = relationship("User", back_populates="student_profile")
    certificates = relationship("Certificate", back_populates="student")

class CoordinatorProfile(Base):
    __tablename__ = "coordinator_profiles"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    is_co_coordinator = Column(Boolean, default=False)
    user = relationship("User", back_populates="coordinator_profile")

class FacultyProfile(Base):
    __tablename__ = "faculty_profiles"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    department = Column(String)
    user = relationship("User", back_populates="faculty_profile")

class Certificate(Base):
    __tablename__ = "certificates"
    
    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("student_profiles.id"))
    title = Column(String)
    type = Column(String)
    provider = Column(String)
    file_url = Column(String)
    status = Column(String, default="pending")
    points_awarded = Column(Integer, default=0)
    uploaded_at = Column(DateTime, default=datetime.utcnow)
    
    student = relationship("StudentProfile", back_populates="certificates")

class PointsConfig(Base):
    __tablename__ = "points_config"
    
    id = Column(Integer, primary_key=True, index=True)
    activity_type = Column(String, unique=True)
    points = Column(Integer)
