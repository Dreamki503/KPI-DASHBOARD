from db import db

class Teams(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    team_name = db.Column(db.String(100), nullable = False)
    team_lead = db.Column(db.String(100), nullable = False)
    no_of_members = db.Column(db.Integer, nullable = False)