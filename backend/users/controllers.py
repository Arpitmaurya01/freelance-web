from flask import Blueprint, jsonify, request
from .models import User
 
user_blueprint = Blueprint(
'user',
__name__,
template_folder='templates',
url_prefix="/api"
)
# any route here will be accessable at /user/<something>
@user_blueprint.route('/user/', methods=['GET','POST'])
def user():
    '''
        get all the users within the system
    '''
    if request.method == "POST":
        # print(request.args)
        # print(request.form)
        data = request.get_json()
        user = User.objects.get_or_404(username="username")
        print(user)
        data={"method":"post","data":data}
    else:
        data={"method":"get","data":User.objects.all()}
       
    
    return jsonify(data)