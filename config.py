class Config(object):
    '''# common configuration settings'''
    pass

class ProdConfig(Config):
    '''# configuration settings for production env'''
    pass

class DevConfig(Config):
    '''# configuration settings for development env'''
    DEBUG = True
    MONGODB_SETTINGS = {
    'db': 'flask_mongo',
    'host': 'localhost',
    'port': 27017
    }