from datetime import date


def agecal(y,m,d):
    import datetime
    today=datetime.datetime.now().date()
    dob=datetime.date(y,m,d)
    age=int((today-dob).days/12)
    print(age)

agecal(2017,8,22)    
