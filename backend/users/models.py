

from random import choices
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

#Signup, Login and Reset Task
from .data.country import country_data
CHOICES = [(country['name'], country['name']) for country in country_data]
class User(mongo.Document):
   
    firstname = mongo.StringField(required=True)
    lastname = mongo.StringField(required=True)
    mobile_no = mongo.StringField(required=True,unique=True)
    email = mongo.StringField(required=True,unique=True, sparse=True)
    password = mongo.DynamicField(required=True)
    country = mongo.StringField(required = True,choices=CHOICES)
   
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




