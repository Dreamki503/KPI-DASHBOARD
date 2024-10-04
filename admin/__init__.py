from flask import Blueprint

admin_blueprint = Blueprint('admin', __name__, url_prefix='/admin', template_folder='templates', static_folder='static')

from . import routes
from . import models