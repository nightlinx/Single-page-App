from flask_restful import fields

job_fields = {
    "name": fields.String,
    "skills": fields.String,
}

face_fields = {
    "id": fields.Integer,
    "Mx": fields.Integer,
    "My": fields.Integer,
    "rx": fields.Integer,
    "ry": fields.Integer,
    "x": fields.Integer,
}

eye_lid_fields = {
    "id": fields.Integer,
    "Mx": fields.Integer,
    "My": fields.Integer,
    "Cx1": fields.Integer,
    "Cy1": fields.Integer,
    "Cx2": fields.Integer,
    "Cy2": fields.Integer,
    "Cx": fields.Integer,
    "Cy": fields.Integer,
}

lip_fields = {
    "id": fields.Integer,
    "Mx": fields.Integer,
    "My": fields.Integer,
    "Cx1": fields.Integer,
    "Cy1": fields.Integer,
    "Cx2": fields.Integer,
    "Cy2": fields.Integer,
    "Cx": fields.Integer,
    "Cy": fields.Integer,
    "h": fields.Integer,
}

hair_fields = {
    "id": fields.Integer,
    "image": fields.FormattedString("/static/{image}"),
}
