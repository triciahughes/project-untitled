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

Sign in page:
![screen recording showing a user logging into the app](https://files.slack.com/files-pri/T02MD9XTF-F051Z3TEJ6L/sign-in.gif)

Sign up page:
![screen recording showing a user signing up for an account](https://files.slack.com/files-pri/T02MD9XTF-F050V0F1VEK/sign-up2.gif)

## Roadmap 📍

Future additions include:
᭼ Allow particiapnts in a book club to suggest the next book, then allowing the Host to choose out of the suggestions or input their own.
᭼ Integrate an API to be able to suggest books, and render book info easily
᭼ Implement rating/review system

## Contributing ✍️

This project was created by [Bianca Aspen](https://github.com/baspin94), [Tricia Hughes](https://github.com/triciahughes)
