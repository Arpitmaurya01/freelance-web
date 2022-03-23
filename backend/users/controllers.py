import email
from flask import Blueprint, jsonify, request
from .models import User
from re import match
from .. import MyException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
# 1. instansiate a blueprint (blueprint)
user_blueprint = Blueprint('users',__name__,template_folder='templates',url_prefix="/api")

# 2. create routes using blueprint instance (blueprint)
@user_blueprint.route('/users/', methods=['GET'])
def users():
    response= {
        "error":True,
        "data":"",
        "message":""
    }
    response["data"] = User.objects()
    return jsonify(response)

@user_blueprint.route('/users/<id>/', methods=['GET'])
@jwt_required()
def user(id):
    response= {
        "error":True,
        "data":"",
        "message":""
    }
    try:
        user_data = User.objects.get(id=id)
    except:
        response["message"] = "username does not exist" 
        user_data = None   
    if user_data is not None:
        request_user = get_jwt_identity()
        if user_data.username == request_user:
            response["data"] = User.objects.get(id=id)
            response["error"] = False
        else:
            response["message"] = "Request not allowed"
    return jsonify(response)

@user_blueprint.route('/signup/', methods=['POST'])
def signup():
    data = request.get_json()
    response= {
        "error":True,
        "data":"",
        "message":""
    }   
    try:
        user=User()
        user.firstname=data['firstname']
        user.lastname = data['lastname']
        #user = User(firstname=data['firstname'])
        #user = User(lastname=data['lastname'])
        #mobile_no = User(mobile_no=data['mobile_no'])
        pattern1 = r"^([+]\d{2})?\d{10}$"
        matched1 = match(pattern1, data['mobile_no'])
        if matched1 is None:
            raise MyException("mobile number wrong")
        #user = User(email=data['email'])
        pattern2 = r"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
        matched2= match(pattern2,data['email'])
        if matched2 is None:
            raise MyException("email is not valid")

        # password validation
        # 1. validate the password string (must contain a number , alphabets, and minimum of 6 digits)
        # 2. save the password
        # 3. if password is not valid(ease a exception"password is not valid") return appropriate message in response
        
        
        pattern=r"^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}"
        matched = match(pattern, data['password'])
        if matched is None:
            raise MyException("password must contain a number ,an alphabet, and minimum of 6 charecters")
        confirm_password = data['confirm_password']
        if data["password"] != data["confirm_password"]:
            raise MyException("Password does not matched")
        user.set_password(data['password'])
        user.email=data['email']
        user.mobile_no=data['mobile_no']
        
        user.country=data['country']
        user.save()
        user.country_name
        response["data"]= user
        response["error"]=False
        response["message"]="User Created"
    
    except MyException as e:
        response["data"] = None
        response["message"] = str(e)
        
    except Exception as e:
        response["message"] = str(e)
        print(str(e))
        if "duplicate" in str(e):
            response["data"]=None
            response["message"]="Try different username"

    return jsonify(response)

@user_blueprint.route('/login/',methods=['POST'])
def login():
    '''json
    # Input Field
    {
        "username": string,
        "password": string
    }
    
    
    # Output Field
    {
        "error": boolean,
        "Massage": string,
        "data":
        "token":
        "user":
    }
    '''
    data = request.get_json()
    response= {
        "error":True,
        "data":"",
        "message":""
    }
    username = data["username"]
    password = data["password"]
    try:
        # check if username is registered or not
        user = User.objects.get(username = username)
    except:
        user = None
    
    if user is not None:
        matched = user.check_password(password)    
        if matched:
            # generate token
            # send token as a response
            access_token = create_access_token(identity=username)
            response["data"]={"user":user,"token":access_token}
            response['error']=False
            response['message']="User Logged in"
        else:
            response['message']="Invalid username or password"
    return jsonify(response)