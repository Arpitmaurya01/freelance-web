from flask import Blueprint, jsonify, request
from .models import User
from .. import MyException
from re import match
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
# 1. instansiate a blueprint (blueprint)
user_blueprint = Blueprint('users',__name__,template_folder='templates',url_prefix="/api")

# 2. create routes using blueprint instance (blueprint)


@user_blueprint.route('/signup/', methods=['POST'])
def signup():
    data = request.get_json()
    response= {
        "error":True,
        "data":"",
        "message":""
    }
    try:
        user = User()
        user.firstname = data['firstname']
        user.lastname = data['lastname']
       
        pattern1 = r"^([+]\d{2})?\d{10}$"
        matched1 = match(pattern1, data['mobile_no'])
        if matched1 is None:
            raise MyException("mobile number wrong")
        
        pattern2 = r"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
        matched2 = match(pattern2, data['email'])
        if matched2 is None:
            raise MyException("email is not valid")

        # password validation
        # 1. validate the password string (must contain a number , alphabets, and minimum of 6 digits)
        # 2. save the password
        # 3. if password is not valid(ease a exception"password is not valid") return appropriate message in response

        pattern = r"^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}"
        matched = match(pattern, data['password'])
        if matched is None:
            raise MyException(
                "password must contain a number ,an alphabet, and minimum of 6 charecters")
        confirm_password = data['confirm_password']
        if data["password"] != data["confirm_password"]:
            raise MyException("Password does not matched")
        user.set_password(data['password'])
        user.email = data['email']
        user.mobile_no = data['mobile_no']

        user.country = data['country']
       
        user.save()
        response["data"]=user
        response["error"]=False
        response["message"]="User Created"
    
    except MyException as e:
        response["data"] = None
        response["message"] = str(e)
        
    except Exception as e:
        if "duplicate" in str(e):
            response["data"]=None
            response["message"]="Try different username"
    
    return jsonify(response)

@user_blueprint.route('/login/',methods=['POST'])
def login():
    data = request.get_json()
    response= {
        "error":True,
        "data":"",
        "message":""
    }
    if data is None:
        response['message'] =  "username and password required"
    else:
        email = data.get("username")
        password= data.get("password")
        try:
            # check if username is registered or not
            user = User.objects.get(email=email)
        except:
            user = None
        
        if user is not None:
            matched = user.check_password(password)    
            if matched:
                # generate token
                # send token as a response
                access_token = create_access_token(identity=email)
                response["data"]={"user":user,"token":access_token}
                response['error']=False
                response['message']="User Logged in"
            else:
                response['message']="Invalid username or password"
    return jsonify(response)

@user_blueprint.route('/reset/', methods=['POST'])
def reset_pass():
    data = request.get_json()
    response = {
        "error": True,
        "data": "",
        "message": ""
    }
    

    email = data["email"]
    try:
        # check if username is registered or not
        user = User.objects.get(email=email)
        
    except:
        
        user = None
    
  
   
    if user is not None:
        pattern = r"^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}"
        matched = match(pattern, data['password'])
        if matched is None:
            raise MyException("password must contain a number ,an alphabet, and minimum of 6 charecters")
               
        confirm_password = data['confirm_password']
        if data["password"] != data["confirm_password"]:
            raise MyException("Password does not matched")

        
        user.set_password(data['password'])
        user.save()
        response["data"] = user
        response["error"] = False
        response["message"] = "Password Updated"

    return jsonify(response)

