from flask import Blueprint, jsonify, request
from .models import Project
from .. import MyException

project_blueprint = Blueprint('project', __name__, template_folder='templates', url_prefix="/api")

#Freelance project


@project_blueprint.route('/postproject/', methods=['POST'])
def postproject():
    data = request.get_json()
    response = {
        "error": True,
        "data": "",
        "message": ""
    }
    try:
        project = Project()
        project.project_title = data['project_title']
        project.project_description = data['project_description']
        project.project_category = data['project_category']
        project.skill = data['skill']
        project.str_biding = data['Start_biding_period']
        project.end_biding = data['end_biding_period']
        project.currency = data['currency']
        project.customized_budget = data['customized_budget']
        project.max_budget = data['max_budget']
        project.min_budget = data['min_budget']
        project.freelancer=data['freelancer']


        project.save()
        response["data"] = project
        response["error"] = False
        response["message"] = "data store"

    except MyException as e:
        response["data"] = None
        response["message"] = str(e)

    return jsonify(response)
