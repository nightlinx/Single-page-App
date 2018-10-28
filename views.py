from flask_restful import Resource, Api, abort, marshal, marshal_with

import marshallers
import models
from server import app


api = Api(app)


class CharacterList(Resource):
    def get(self):
        characters = []  # TODO pobieramy dane z bazy
        return {"characters": characters}

    def post(self):
        character = {}  # TODO tworzymy nowy obiekt w bazie
        return character


class Character(Resource):
    def get(self, character_id):
        character = {'id': character_id}  # TODO pobieramy dane z bazy
        return character

    def patch(self, character_id):
        character = {'id': character_id}  # TODO aktualizujemy dane z bazy
        return character


class JobList(Resource):
    @marshal_with(marshallers.job_fields, envelope="jobs")
    def get(self):
        # skills = [
        #     ['Sztuka/Rzemiosło', 'Charakteryzacja'],
        #     ['Broń palna'],
        #     ['Nasłuchiwanie'],
        #     ['Prawo'],
        #     ['Urok Osobisty', 'Gadanina', 'Zastraszanie', 'Perswazja'],
        #     ['Psychologia'],
        #     ['Spostrzegawczość'],
        # ]
        # jobs = {
        #     "jobs": [
        #         {"name": name, 'skills': skills}
        #         for name in [
        #             'Aktor',
        #             'Antykwariusz',
        #             'Artysta',
        #             'Detektyw',
        #             'Hobbysta',
        #             'Lekarz',
        #             'Policjant',
        #             'Student',
        #         ]
        #     ]
        # }
        jobs = models.Job.query.all()
        return jobs


class BaseList(Resource):
    model = None
    fields: dict = None
    envelope: str = None

    def get(self):
        return marshal(self.model.query.all(), self.fields, envelope=self.envelope)


class FaceShapeList(BaseList):
    model = models.FaceShape
    fields = marshallers.face_fields


class RightEyeLidList(BaseList):
    model = models.RightEyeLidShape
    fields = marshallers.eye_lid_fields


class LeftEyeLidList(BaseList):
    model = models.LeftEyeLidShape
    fields = marshallers.eye_lid_fields


class UpperLipShapeList(BaseList):
    model = models.UpperLipShape
    fields = marshallers.lip_fields


class BottomLipShapeList(BaseList):
    model = models.BottomLipShape
    fields = marshallers.lip_fields


class HairList(BaseList):
    model = models.Hair
    fields = marshallers.hair_fields


api.add_resource(CharacterList, '/characters')
api.add_resource(Character, '/characters/<character_id>')
api.add_resource(JobList, '/jobs')
api.add_resource(FaceShapeList, '/faces')
api.add_resource(RightEyeLidList, '/eye/right')
api.add_resource(LeftEyeLidList, '/eye/left')
api.add_resource(UpperLipShapeList, '/lip/upper')
api.add_resource(BottomLipShapeList, '/lip/bottom')
api.add_resource(HairList, '/hair')
