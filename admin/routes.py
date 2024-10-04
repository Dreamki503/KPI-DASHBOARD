from flask import render_template, redirect, url_for, send_from_directory
from flask_login import login_required
from . import admin_blueprint
from auth.models import Users
from admin.models import Teams

@admin_blueprint.route("/dashboard")
@login_required
def dashboard():
    return render_template("dashboard.html", actived = 'active', title = 'Dashboard')

@admin_blueprint.route('/teams', methods = ['GET', 'POST'])
@login_required
def teams():
    user = Users.query.all()
    team = Teams.query.all()
    return render_template('teams.html', title='teams', activet = 'active', user = user, team = team)
