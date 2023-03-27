# from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.ext.associationproxy import association_proxy
from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_only = ('first_name',)

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)

    groups = db.relationship('Group', backref='user')

    # groups = association_proxy('members', 'group')
    # memberships = db.relationship('Member', backref='user', cascade="all, delete, delete-orphan")

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
    
# class Member(db.Model, SerializerMixin):
#     __tablename__ = 'members'

#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
#     group_id = db.Column(db.Integer, db.ForeignKey('groups.id'))

class Group(db.Model, SerializerMixin):
    __tablename__ = 'groups'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    host_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    # users = association_proxy('members', 'user')
    # memberships = db.relationship('Member', backref='group', cascade="all, delete, delete-orphan")
    
    def __repr__(self):
        return f'<Group: {self.name} Host ID: {self.host_id}>'



