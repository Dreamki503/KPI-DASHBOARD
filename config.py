import os

class Config:
    SECRET_KEY = os.urandom(24)
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://Aryan:College123@127.0.0.1/kpi"
    SQLALCHEMY_TRACK_MODIFICATIONS = False