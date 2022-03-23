class Config(object):
    '''# common configuration settings'''
    JWT_SECRET_KEY = "5Vm9mqafwOA9PCM20FSi6cMw_pk"
    
    # APIs that need to display documentation
    API_DOC_MEMBER = [
        "users",
        
    ]
    pass

class ProdConfig(Config):
    '''# configuration settings for production env'''
    pass

class DevConfig(Config):
    '''# configuration settings for development env'''
    DEBUG = True
    MONGODB_SETTINGS = {
    'db': 'project',
    'host': 'localhost',
    'port': 27017
    }