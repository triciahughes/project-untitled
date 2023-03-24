from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-_password_hash')

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)


    @hybrid_property
    def _password_hash(self, password):
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