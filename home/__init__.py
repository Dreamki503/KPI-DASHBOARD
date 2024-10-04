from flask import Blueprint

# Initialize the blueprint
home = Blueprint('home', __name__, template_folder='templates')

from . import routes 