import os
import os.path

from flask_sqlalchemy import SQLAlchemy

from server import app

db_path = "test.db"
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{db_path}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)


class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    skills = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return '<Job %r>' % self.name


class FaceShape(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Mx = db.Column(db.SmallInteger)
    My = db.Column(db.SmallInteger)
    rx = db.Column(db.SmallInteger)
    ry = db.Column(db.SmallInteger)
    x = db.Column(db.SmallInteger)


class BaseEyeLid:
    id = db.Column(db.Integer, primary_key=True)
    Mx = db.Column(db.SmallInteger)
    My = db.Column(db.SmallInteger)
    Cx1 = db.Column(db.SmallInteger)
    Cy1 = db.Column(db.SmallInteger)
    Cx2 = db.Column(db.SmallInteger)
    Cy2 = db.Column(db.SmallInteger)
    Cx = db.Column(db.SmallInteger)
    Cy = db.Column(db.SmallInteger)


class LeftEyeLidShape(BaseEyeLid, db.Model):
    pass


class RightEyeLidShape(BaseEyeLid, db.Model):
    pass


class BaseLip:
    id = db.Column(db.Integer, primary_key=True)
    Mx = db.Column(db.SmallInteger)
    My = db.Column(db.SmallInteger)
    Cx1 = db.Column(db.SmallInteger)
    Cy1 = db.Column(db.SmallInteger)
    Cx2 = db.Column(db.SmallInteger)
    Cy2 = db.Column(db.SmallInteger)
    Cx = db.Column(db.SmallInteger)
    Cy = db.Column(db.SmallInteger)
    h = db.Column(db.SmallInteger)


class UpperLipShape(BaseLip, db.Model):
    pass


class BottomLipShape(BaseLip, db.Model):
    pass


class Hair(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String, unique=True)

class Character(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    #part1
    name = db.Column(db.String)
    gamer = db.Column(db.String)
    age = db.Column(db.SmallInteger)
    sex = db.Column(db.String)
    city = db.Column(db.String)
    birthCity = db.Column(db.String)
    importantPlace = db.Column(db.String)
    nature = db.Column(db.String)
    importantPeople = db.Column(db.String)
    #part2
    strength = db.Column(db.SmallInteger)
    constitution = db.Column(db.SmallInteger)
    power = db.Column(db.SmallInteger)
    dexterity = db.Column(db.SmallInteger)
    appearance = db.Column(db.SmallInteger)
    size = db.Column(db.SmallInteger)
    intelligence = db.Column(db.SmallInteger)
    education = db.Column(db.SmallInteger)
    luck = db.Column(db.SmallInteger)
    magicPoints = db.Column(db.SmallInteger)
    damageBonus = db.Column(db.SmallInteger)
    build = db.Column(db.SmallInteger)
    hitPoints = db.Column(db.SmallInteger)
    sanity = db.Column(db.SmallInteger)
    #part3
    occupation = db.Column(db.String)
    skills = db.Column(db.String)
    interests = db.Column(db.String)
    #part3
    weapons = db.Column(db.String)
    creditRating = db.Column(db.SmallInteger)
    equipment = db.Column(db.String)



@app.cli.command()
def create_db():
    try:
        os.remove(db_path)
    except OSError:
        pass

    db.create_all()

    db.session.add_all([
        FaceShape(Mx=100, My=100, rx=50, ry=70, x=100),
        FaceShape(Mx=100, My=100, rx=50, ry=75, x=100),
        FaceShape(Mx=95, My=105, rx=52, ry=60, x=110),
    ])
    db.session.add_all([
        LeftEyeLidShape(Mx=90, My=105, Cx1=90, Cy1=100,
                        Cx2=105, Cy2=95, Cx=115, Cy=105),
        LeftEyeLidShape(Mx=85, My=100, Cx1=90, Cy1=100,
                        Cx2=105, Cy2=95, Cx=115, Cy=105),
        LeftEyeLidShape(Mx=95, My=100, Cx1=90, Cy1=105,
                        Cx2=105, Cy2=95, Cx=115, Cy=105),
    ])
    db.session.add_all([
        RightEyeLidShape(Mx=133, My=105, Cx1=143, Cy1=95,
                         Cx2=158, Cy2=100, Cx=158, Cy=105),
        RightEyeLidShape(Mx=133, My=105, Cx1=143, Cy1=95,
                         Cx2=158, Cy2=100, Cx=163, Cy=100),
        RightEyeLidShape(Mx=133, My=105, Cx1=143, Cy1=95,
                         Cx2=158, Cy2=105, Cx=153, Cy=100),
    ])

    db.session.add_all([
        UpperLipShape(Mx=110, My=145, Cx1=115, Cy1=140,
                      Cx2=125, Cy2=140, Cx=125, Cy=142, h=30),
        UpperLipShape(Mx=110, My=145, Cx1=115, Cy1=137,
                      Cx2=125, Cy2=137, Cx=125, Cy=140, h=30),
        UpperLipShape(Mx=110, My=145, Cx1=115, Cy1=140,
                      Cx2=125, Cy2=140, Cx=125, Cy=142, h=0),
    ])

    db.session.add_all([
        BottomLipShape(Mx=110, My=145, Cx1=115, Cy1=150,
                       Cx2=135, Cy2=150, Cx=140, Cy=145),
        BottomLipShape(Mx=110, My=145, Cx1=115, Cy1=155,
                       Cx2=135, Cy2=155, Cx=140, Cy=145),
        BottomLipShape(Mx=117, My=148, Cx1=115, Cy1=150,
                       Cx2=135, Cy2=150, Cx=132, Cy=148),
    ])

    db.session.add_all([
        Hair(image=f"img/hair/{i}{j}.png")
        for i in range(1, 4) for j in range(1, 7)
    ])


    db.session.commit()
