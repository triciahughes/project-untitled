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

### Sign Up/Sign In Flow

Users with an existing account will be directed to sign in by entering an email and password upon loading the app.

![User entering email and password to log in to book club app.](https://github.com/triciahughes/project-untitled/blob/main/assets/signin.gif)

Users who don't already have an existing account can sign up for one by clicking the link on the login page and entering their information.

![User clicking on link that redirects them to sign up page and entering first name, last name, email, and password to sign up.](https://github.com/triciahughes/project-untitled/blob/main/assets/signup.gif)

Upon logging in, users will be taken to a home page with listing the groups they host and the groups they participate in.
![View of home page upon login. The left column lists groups the user hosts, while the right column lists groups the user participates in.](https://github.com/triciahughes/project-untitled/blob/main/assets/Home%20Page.png)

### Host Actions

Upon clicking on a group they host, users will be taken to the main page for the group where they can view and edit various details about the group, including membership, featured book, and discussion prompts.

![User on app home page selecting a group they host and being redirected to the detailed page for that group.](https://github.com/triciahughes/project-untitled/blob/main/assets/hostpage.gif)

The group host can add members by clicking on the 'Add Member' button and entering the email address of another registered user.

![User clicking on 'Add Member' button and typing another user's email address into the field that appears. Upon submit, the new member is added to the end of the 'Members' list.](https://github.com/triciahughes/project-untitled/blob/main/assets/addmember.gif)

The host can also remove a member from the group by clicking on the 'x' button next to their name.

![User clicking on the 'x' button next to a member's name to remove the member from the group. Their name disappears.](https://github.com/triciahughes/project-untitled/blob/main/assets/removeMember.gif)

The host can add a new discussion prompt by clicking the 'New Prompt' button and entering the prompt text in the field. Upon submit, the new prompt will be added to the 'Discussions' panel.

![User clicking the 'New Prompt' button, typing a prompt, and submitting. The prompt they wrote immediately shows up in the 'Discussions' panel.](https://github.com/triciahughes/project-untitled/blob/main/assets/addprompt.gif)

## Roadmap 📍

Future additions include:
- Allow participants in a book club to suggest the next book, then allowing the Host to choose out of the suggestions or input their own.
- Integrate an API to be able to suggest books, and render book info easily.
- Implement rating/review system.

## Contributing ✍️

This project was created by [Bianca Aspin](https://github.com/baspin94) and [Tricia Hughes](https://github.com/triciahughes).
