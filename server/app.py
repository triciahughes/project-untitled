from flask import Flask, request, session, make_response, jsonify
from flask_migrate import Migrate
from flask_restful import Api, Resource
from sqlalchemy.exc import IntegrityError
from werkzeug.exceptions import NotFound, Unauthorized
from config import app, db, api
from models import User

migrate = Migrate(app, db)
db.init_app(app)
api = App(app)

class Signup(Resource):

    def post(self):

        data = request.get_json()

        new_user = User(
            first_name=data.get['first_name'],
            last_name=data.get['last_name'],
            email=data.get['email']
        )

        new_user.password_hash = data['password']

        try:
            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id

            return user.to_dict(), 201

            response = make_response(
                new_user.to_dict(),
                201
            )
            return response

        except IntegrityError:

            return {'error': '422'}, 422


class AuthorizedSession(Resource):

    def get(self):

        if session.get('user_id'):

            user = User.query.filter(User.id == session['user_id']).first()

            return user.to_dict(), 200

        return {'error': '401 Unauthorized'}, 401

class Login(Resource):
    def post(self):

        data = request.get_json()

        email = data.get('email')
        password = data.get('password')

        user = User.query.filter(User.email == email).first()

        if user:
            if user.authenticate(password):

                session['user_id'] = user.id
                return user.to_dict()

            return {'error': '401 Unauthorized'}, 401

class Logout(Resource):

    def delete(self):

        if session.get('user_id'):

            session['user_id'] = None

            return {}, 204

        return {'error': '401 Unauthorized'}, 401


api.add_resource(Signup, '/signup')
api.add_resource(AuthorizedSession, '/authorized')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')

if __name__ == '__main__':
    app.run(port=5555, debug=True)