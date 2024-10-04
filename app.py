from flask import Flask
from flask_migrate import Migrate
from flask_login import LoginManager

from config import Config
from auth.models import Users
from db import db

def create_app():
    app = Flask(__name__, template_folder='templates', static_folder='static')
    app.config.from_object(Config)
    db.init_app(app)

    login_manager = LoginManager(app)
    login_manager.login_view = 'auth_blueprint.login'

    @login_manager.user_loader
    def load_user(user_id):
        return Users.query.get(int(user_id))

    #import and register all blueprints
    from home import home as home_blueprint
    from admin import admin_blueprint
    from auth import auth_blueprint

    app.register_blueprint(home_blueprint)
    app.register_blueprint(admin_blueprint)
    app.register_blueprint(auth_blueprint)

    migrate = Migrate(app, db)

    with app.app_context():
        db.create_all()

    return app

