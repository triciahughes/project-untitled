from app import app
from models import db, User, Group, Member

with app.app_context():
    Group.query.delete()
    User.query.delete()
    Member.query.delete()
    db.session.commit()

    print("Seeding users...")
    user1 = User(first_name="Tricia", last_name="Hughes", email="hughes.a.tricia@gmail.com")
    user1.password_hash = "hi"
    db.session.add(user1)
    db.session.commit()

    user2 = User(first_name="Bianca", last_name="Aspin", email="bianca@gmail.com")
    user2.password_hash = "bianca"
    db.session.add(user2)
    db.session.commit()

    print("Seeding groups...")

    group1 = Group(name="Tricia's Book Club",host_id=user1.id)
    group2 = Group(name='All about Sophie', host_id=user1.id)
    group3 = Group(name='All about Sam', host_id=user1.id)
    group4 = Group(name='All about Chloe', host_id=user1.id)
    group5 = Group(name='Book Bees', host_id=user2.id)
    group6 = Group(name="Daisy's Forest Friends", host_id=user2.id)

    db.session.add_all([group1, group2, group3, group4, group5, group6])
    db.session.commit()

    print("Seeding members...")
    member1 = Member(user_id=user2.id, group_id=group1.id)
    member2 = Member(user_id=user2.id, group_id=group2.id)
    member3 = Member(user_id=user2.id, group_id=group3.id)
    member4 = Member(user_id=user2.id, group_id=group4.id)
    member5 = Member(user_id=user1.id, group_id=group5.id)
    member6 = Member(user_id=user1.id, group_id=group6.id)

    db.session.add_all([member1, member2, member3, member4, member5, member6])
    db.session.commit()
    
    print("Seeding done!")

