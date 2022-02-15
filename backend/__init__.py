
from flask_mongoengine import MongoEngine
from flask import Flask, render_template
from flask_docs import  ApiDoc
# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
# db = SQLAlchemy()
# migrate = Migrate()
mongo = MongoEngine()

def page_not_found(error):
    return render_template('404.html'), 404


def create_app(object_name):
    # from .users.controllers import users_blueprint
    app = Flask(__name__)
    app.config.from_object(object_name)
    mongo.init_app(app)
    # db.init_app(app)
    # migrate.init_app(app, db)
    # register your blue pirnt here
    # app.register_blueprint(users_blueprint)
    from .users import create_module as user_create_module
    
    # register you modules here
    user_create_module(app)
    ApiDoc(
        app,
        title="Flask Backend",
        version="0.0.1",
        description="A simple app API"

    )
    app.register_error_handler(404, page_not_found)
    # app.register_error_handler(200,home)
    
    # APIs that need to display documents
    app.config['API_DOC_MEMBER'] = ['user']

    # RESTful Api documents to be excluded
    app.config['RESTFUL_API_DOC_EXCLUDE'] = []
    return app