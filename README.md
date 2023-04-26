# unTITLEd Book Club App!

## Description

This app allows you to create, manage, and participate in virtual book clubs 📖💬

## Installation 📥

To set up the frontend and backend dependencies, from the root directory, run:
npm install --prefix client

In server/ run:
flask db upgrade
python seed.py

To start the server and to see how the React application and Flask API are interacting, you can run the Flask application in one terminal by running:
python app.py

Then open another terminal and run React:
npm start --prefix client

## Usage ⛯

Users with an existing account will be directed to sign in by entering an email and password upon loading the app.

![User entering email and password to log in to book club app.](https://github.com/triciahughes/project-untitled/blob/main/assets/signin.gif)

Users who don't already have an existing account can sign up for one by clicking the link on the login page and entering their information.

![User clicking on link that redirects them to sign up page and entering first name, last name, email, and password to sign up.](https://github.com/triciahughes/project-untitled/blob/main/assets/signup.gif)

## Roadmap 📍

Future additions include:
᭼ Allow participants in a book club to suggest the next book, then allowing the Host to choose out of the suggestions or input their own.
᭼ Integrate an API to be able to suggest books, and render book info easily.
᭼ Implement rating/review system.

## Contributing ✍️

This project was created by [Bianca Aspin](https://github.com/baspin94), [Tricia Hughes](https://github.com/triciahughes)
