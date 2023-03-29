from app import app
from models import db, User, Group, Member, Book

with app.app_context():
    Member.query.delete()
    Group.query.delete()
    User.query.delete()
    Book.query.delete()

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

    user3 = User(first_name="Ari", last_name="Marz", email="ari@gmail.com")
    user3.password_hash = "ari"
    db.session.add(user3)
    db.session.commit()

    user4 = User(first_name="Brett", last_name="de Bear", email="brett@gmail.com")
    user4.password_hash = "brett"
    db.session.add(user4)
    db.session.commit()

    user5 = User(first_name="Diana", last_name="Lin", email="diana@gmail.com")
    user5.password_hash = "diana"
    db.session.add(user5)
    db.session.commit()

    user6 = User(first_name="Emiley", last_name="Palmquist", email="emiley@gmail.com")
    user6.password_hash = "emiley"
    db.session.add(user6)
    db.session.commit()

    user7 = User(first_name="Kyle", last_name="Wehrung", email="kylew@gmail.com")
    user7.password_hash = "kylew"
    db.session.add(user7)
    db.session.commit()

    user8 = User(first_name="Kyle", last_name="Schneider", email="kyles@gmail.com")
    user8.password_hash = "kyles"
    db.session.add(user8)
    db.session.commit()

    user9 = User(first_name="Nick", last_name="Johnson", email="nick@gmail.com")
    user9.password_hash = "nick"
    db.session.add(user9)
    db.session.commit()

    user10 = User(first_name="Sam", last_name="Chappel", email="sam@gmail.com")
    user10.password_hash = "sam"
    db.session.add(user10)
    db.session.commit()

    user11 = User(first_name="Steve", last_name="Passarelli", email="steve@gmail.com")
    user11.password_hash = "steve"
    db.session.add(user11)
    db.session.commit()

    user12 = User(first_name="Terrence", last_name="Chung", email="terrence@gmail.com")
    user12.password_hash = "terrence"
    db.session.add(user12)
    db.session.commit()

    user13 = User(first_name="Topher", last_name="Ludlow", email="topher@gmail.com")
    user13.password_hash = "topher"
    db.session.add(user13)
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

    print("Seeding books...")
    
    book1 = Book(
        group_id=group1.id,
        title="The Great Railroad Revolution:...",
        author="Christian Wolmar",
        image="https://books.google.com/books/content?id=h7i0fXplIJEC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U10zYAt_9W7rOsUpmCORU-GHlCSjQ&w=1280",
        publication_year=2012,
        genre="History",
        votes=3,
        featured=True
    )
    book2 = Book(
        group_id=group2.id,
        title="The Old Man and The Sea",
        author="Ernest Hemingway",
        image="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780684801223/old-man-and-the-sea-9780684801223_hr.jpg",
        publication_year=1995,
        genre="Fiction",
        votes=1,
        featured=True
    )
    book3 = Book(
        group_id=group3.id,
        title="Love that Dog",
        author="Sharon Creech",
        image="https://s3.amazonaws.com/ArchiveImages/SLJ/2016/02/000Love-That-Dog-411x600.jpg",
        publication_year=2001,
        genre="Fiction",
        votes=5,
        featured=True
    )
    book4 = Book(
        group_id=group4.id,
        title="The World According to Bob:...",
        author="James Bowen",
        image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71dmYvc5v3L._AC_UF350,350_QL50_.jpg",
        publication_year=2013,
        genre="Biography",
        votes=5,
        featured=True
    )

    book5 = Book(
        group_id=group5.id,
        title="Quiet: The Power of Introverts in a World That Can't Stop Talking",
        author="Susan Cain",
        image="https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/QuietBookCover.jpg/220px-QuietBookCover.jpg",
        publication_year=2012,
        genre="Nonfiction",
        votes=4,
        featured=True
    )

    book6 = Book(
        group_id=group6.id,
        title="The Hitchhiker's Guide to the Galaxy",
        author="Douglas Adams",
        image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51+qSD6UwfL._SX312_BO1,204,203,200_.jpg",
        publication_year=1979,
        genre="Science Fiction",
        votes=5,
        featured=True
    )

    db.session.add_all([book1, book2, book3, book4, book5, book6])
    db.session.commit()

    
    print("Seeding done!")

