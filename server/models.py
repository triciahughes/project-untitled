# from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.ext.associationproxy import association_proxy
from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-_password_hash', '-host_groups', '-member_groups', '-memberships')

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)

    host_groups = db.relationship('Group', backref='user')
    member_groups = association_proxy('memberships', 'group')

    # Set up relationship between users and groups
    memberships = db.relationship('Member', backref='user', cascade="all, delete, delete-orphan")
    # Set up relationship between users and comments
    comments = db.relationship('Comment', backref='user')

    @hybrid_property
    def password_hash(self):
        return self._password_hash
        
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8')
        )
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8')
        )

    def __repr__(self):
        return f'<User: {self.first_name} {self.last_name}>'
    
class Member(db.Model, SerializerMixin):
    __tablename__ = 'members'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    group_id = db.Column(db.Integer, db.ForeignKey('groups.id'))

    def __repr__(self):
        return f'<User ID: {self.user_id} Group ID: {self.group_id}>'

class Group(db.Model, SerializerMixin):
    __tablename__ = 'groups'

    serialize_rules = ('-member_details', '-memberships', '-user', '-books')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    host_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    member_details = association_proxy('memberships', 'user')

    # Set up relationship between users and groups
    memberships = db.relationship('Member', backref='group', cascade="all, delete, delete-orphan")
    # Set up relationship between users and books
    books = db.relationship('Book', backref='group', cascade="all, delete, delete-orphan")
    
    def __repr__(self):
        return f'<Group: {self.name} Host ID: {self.host_id}>'

class Book(db.Model, SerializerMixin):

    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey('groups.id'))

    title = db.Column(db.String, nullable=False)
    author = db.Column(db.String, nullable=False)
    image = db.Column(db.String)
    publication_year = db.Column(db.Integer)
    genre = db.Column(db.String)
    votes = db.Column(db.Integer)
    featured = db.Column(db.Boolean)

    # Set up relationship between prompts and books
    prompts = db.relationship('Prompt', backref='book')


    def __repr__(self):
        return f'<Title: {self.title} Author: {self.author} Genre: {self.genre} Votes: {self.votes} Featured: {self.featured}>'

class Prompt(db.Model, SerializerMixin):

    __tablename__ = 'prompts'

    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'))
    prompt = db.Column(db.String)

    # Set up relationship between comments and prompts
    comments = db.relationship('Comment', backref='prompt')


    def __repr__(self):
        return f'<Title: {self.title} Author: {self.author} Genre: {self.genre} Votes: {self.votes} Featured: {self.featured}>'

class Comment(db.Model, SerializerMixin):

    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    prompt_id = db.Column(db.Integer, db.ForeignKey('prompts.id'))
    comment = db.Column(db.String)



    def __repr__(self):
        return f'<Title: {self.title} Author: {self.author} Genre: {self.genre} Votes: {self.votes} Featured: {self.featured}>'
