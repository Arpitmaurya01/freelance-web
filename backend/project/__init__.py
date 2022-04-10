def create_module(app, **kwargs):
    from .controllers import project_blueprint
    app.register_blueprint(project_blueprint)
