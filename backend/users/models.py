import json
from random import choices
from xml.dom.minidom import Document
from .. import mongo
from . import bcrypt
'''
primary_key=None
db_field=None,
required=False,
default=None,
unique=False,
unique_with=None,
choices=None
'''
from .country import country_data
class User(mongo.Document):
    CHOICES = [(country['name'], country['name']) for country in country_data]
    firstname = mongo.StringField(Required=True)
    lastname = mongo.StringField(Required=True)
    mobile_no = mongo.StringField(Required=True)
    email = mongo.StringField(Required=True,unique=True,sparse=True)
    password = mongo.DynamicField(Required=True)
    country = mongo.StringField(choices=CHOICES)
    
    @property
    def country_name(self):
        country = list(filter(lambda x: x['code'] == self.country, country_data))
        return country[0]['name']
    @property
    def username(self):
        return self.email
    
    def set_password(self, password):
        self.password= bcrypt.generate_password_hash(password)
    def check_password(self, password):
        return bcrypt.check_password_hash(self.password, password)
    
# # before you start to work
# git pull

# # resolve conflicts if any

# # Do your changes
# git status
# git add <filename>
# # or
# git add .
# git status
# git commit -m"write your message"

# # may be need to pull again if there is any changes by teammates
# git pull
# # resolve conflicts if any

# git push
# # code updated on cloud
