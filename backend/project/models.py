from .. import mongo


#Freelance Project task
from .data.language import lang
from .data.project_category import categories
from .data.skills import skill
from .data.currency import curr
from .data.budget import bud
from .data.country import country_data



class Freelancer(mongo.EmbeddedDocument):
    x = ('On site', 'Remote')
    CHOICES = [(country['name'], country['name']) for country in country_data]
    CHOICE1 = [(language['name'], language['name']) for language in lang]
    y = ('male', 'female', 'others')

    freelance_availability = mongo.StringField(choices=x)
    languages = mongo.StringField(choices=CHOICE1)
    gender = mongo.StringField(choices=y)
    owner_cont = mongo.StringField(choices=CHOICES)
    freelancer_cont = mongo.StringField(choices=CHOICES)



class Project(mongo.Document):
    #defining one choice from multichoices category
    CHOICES1 = [(project_category['name'], project_category['name'])for project_category in categories]
    CHOICES2 = [(skills['key'], skills['key']) for skills in skill]
    CHOICES3 = [(currency['name'], currency['name']) for currency in curr]
    CHOICES4 = [(budget['name'], budget['name']) for budget in bud]

    project_title = mongo.StringField(required=True)
    project_description = mongo.StringField(required=True, max_length=100)
    project_category = mongo.StringField(required=True, choices=CHOICES1)
    skill = mongo.ListField(required=True, choices=CHOICES2, max_length=5)
    str_biding = mongo.StringField(reqired=True)
    end_biding = mongo.StringField(reqired=True)
    currency = mongo.StringField(required=True, choices=CHOICES3)
    customized_budget = mongo.StringField(required=True, choices=CHOICES4)
    min_budget = mongo.IntField()
    max_budget = mongo.IntField()

    freelancer = mongo.EmbeddedDocumentField(Freelancer)

'''pROJECT
[
{
  "SFSD":"SDFSDF",
  "SFSD":"SDFSDF",
  freelancer:[
      {
      "LANGUAGE":["DFG","DFG","DFGDF"],
      "GENDER":"m"
  },
  {
      "LANGUAGE":["DFG","DFG","DFGDF"],
      "GENDER":"m"
  },
  {
      "LANGUAGE":["DFG","DFG","DFGDF"],
      "GENDER":"m"
  }
  ]
 },
 {
  "SFSD":"SDFSDF",
  "SFSD":"SDFSDF",
  freelancer:{
      "LANGUAGE":["DFG","DFG","DFGDF"],
      "GENDER":"m"
  }


 ]
'''

