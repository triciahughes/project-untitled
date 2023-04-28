from flask import Flask, request, session, make_response, jsonify, abort, render_template
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError
from werkzeug.exceptions import NotFound, Unauthorized
from config import app, db, api
from models import User, Group, Member, Prompt, Comment
from flask_cors import CORS

CORS(app)

@app.route('/')
@app.route('/member_group/<int:id>')
@app.route('/host_group/<int:id>')
@app.route('/signup')
@app.route('/signin')
@app.route('/<int:id>')
def index(id=0):
    return render_template("index.html")

class Signup(Resource):

    def post(self):

        data = request.get_json()

        new_user = User(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email']
        )

        new_user.password_hash = data['password']

        
        db.session.add(new_user)
        db.session.commit()

        session['user_id'] = new_user.id

        response = make_response(
            new_user.to_dict(),
            201
        )
        return response



class AuthorizedSession(Resource):

    def get(self):

        user = User.query.filter(User.id == session.get('user_id')).first()

        if user:

            response = make_response(
                jsonify(user.to_dict()),
                200
            )
            return response
        
        print("Did not find user.")

        return {'error': '401 Unauthorized'}, 401

class Login(Resource):
    def post(self):

        data = request.get_json()

        email = data.get('email')
        password = data.get('password')

        user = User.query.filter(User.email == email).first()

            
        if user.authenticate(data['password']):

            session['user_id'] = user.id

            response = make_response(
                user.to_dict(),
                200
            )
            return response
        return {'error' : "Invalid Username or Password"}, 401
                


class Logout(Resource):

    def delete(self):

        if session.get('user_id'):

            session['user_id'] = None

            return {}, 204

        return {'error': '401 Unauthorized'}, 401
    
class HostGroups(Resource):
    def get(self, id):
        
        user = User.query.filter(User.id == id).first()
        
        groups = [group.to_dict(rules=('member_details',)) for group in user.host_groups]

        if not groups:
            pass

        response = make_response(
            groups, 
            200
        )

        return response

    
class MemberGroups(Resource):
    def get(self, id):

        user = User.query.filter(User.id == id).first()
        groups = [group.to_dict() for group in user.member_groups]

        response = make_response(
            groups,
            200
        )

        return response

class HostGroupDetails(Resource):

    def get(self, id):

        group = Group.query.filter(Group.id == id).first()

      

        group_dict = group.to_dict(rules=('member_details', 'memberships', 'books', 'books.prompts', 'books.prompts.comments', 'books.prompts.comments.id'))

        response = make_response(
            group_dict,
            200
        )

        return response

class MemberGroupDetails(Resource):

    def get(self, id):

        group = Group.query.filter(Group.id == id).first()

        group_dict = group.to_dict()

        response = make_response(
            group_dict,
            200
        )

        return response
    
class MemberEdit(Resource):

    def post(self):

        email = request.get_json()['email']
        group_id = request.get_json()['group_id']
        user = User.query.filter(User.email == email).first()

        if not user: 
            pass

        new_member = Member(
            user_id = user.id,
            group_id = group_id
        )

        db.session.add(new_member)
        db.session.commit()

        response = make_response(
            new_member.user.to_dict(rules=('memberships',)),
            201
        )

        return response

class MemberById(Resource):
    def get(self, id):
        member = Member.query.filter(Member.id == id).first().to_dict()

        if not member:
            pass

        response = make_response(
            member, 
            200
        )

        return response


    def delete(self, id):
        member = Member.query.filter(Member.id == id).first()

        if not member:
            pass

        db.session.delete(member)
        db.session.commit()

        response_body = {"message": "User successfully removed from your group."}

        response = make_response(
            response_body, 
            200
        )

        return response

        
      
class Prompts(Resource):

    def get(self, id):

        prompt = Prompt.query.filter(Prompt.id == id).first()

        response = make_response(
            prompt.to_dict(rules=('comments',)), 
            201
        )

        return response



class AddPrompts(Resource):

        def post(self):

            book_id = request.get_json()['book_id']
            prompt = request.get_json()['prompt']

            new_prompt = Prompt(
                book_id= book_id,
                prompt= prompt,
            )

            db.session.add(new_prompt)
            db.session.commit()

            response = make_response(
                new_prompt.to_dict(),
                201
            )

            return response

class AddGroup(Resource):

        def post(self):

            host_id = request.get_json()['host_id']
            name = request.get_json()['name']

            new_group = Group(
                host_id= host_id,
                name= name,
            )

            db.session.add(new_group)
            db.session.commit()

            response = make_response(
                new_group.to_dict(),
                201
            )

            return response


class AddComments(Resource):

    def post(self):

        prompt_id = request.get_json()['prompt_id']
        user_id = request.get_json()['user_id']
        comment = request.get_json()['comment']
        

        new_comment = Comment(
            user_id = user_id,
            prompt_id = prompt_id,
            comment= comment,
        )

        db.session.add(new_comment)
        db.session.commit()

        response = make_response(
            new_comment.to_dict(),
            201
        )

        return response



@app.errorhandler(NotFound)
def handle_not_found(e):
    response = make_response(
        "Not Found: Sorry the resource you are lookiung for does not exist",
        404
    )
    return response

api.add_resource(Signup, '/signup')
api.add_resource(AuthorizedSession, '/authorized')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(HostGroups, '/host/<int:id>')
api.add_resource(MemberGroups, '/membership/<int:id>')
api.add_resource(HostGroupDetails, '/host_group/<int:id>')
api.add_resource(MemberGroupDetails, '/member_group/<int:id>')
api.add_resource(MemberEdit, '/member')
api.add_resource(MemberById, '/member/<int:id>')
api.add_resource(Prompts, '/prompt/<int:id>')
api.add_resource(AddPrompts, '/prompt')
api.add_resource(AddGroup, '/group')
api.add_resource(AddComments, '/comment')



if __name__ == '__main__':
    app.run(port=5555, debug=True)