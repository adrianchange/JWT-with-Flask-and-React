"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.index import db, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity

api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def signup_user():
    body = request.get_json(force=True)
    register_user =  User(email=body['email'], password=body['password'], is_active=True)
    db.session.add(register_user)
    db.session.commit()
    return jsonify(register_user.serialize()), 201

@api.route('/login', methods=['POST'])
def login():
    body=request.get_json(force=True)
    user=db.session.query(User).filter(User.email==body['email']).first()
    if user.password == body['password']:
        access_token= create_access_token(identity=user.id)
        return jsonify(access_token),200
    else:
        return jsonify("error user not exist"),401

@api.route('/private',methods=["GET"])
@jwt_required()
def private():
    user_token=get_jwt_identity()
    print(user_token)
    user=User.query.get(user_token)
    return jsonify(user.serialize()),200