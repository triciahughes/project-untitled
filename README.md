# unTITLEd Book Club App

## Description

This app allows users to create, manage, and participate in virtual book clubs. 📖💬

## Installation 📥

To set up the frontend and backend dependencies, from the root directory, run:
```
$ npm install --prefix client
```
From the `server/` directory, run:
```
$ flask db upgrade
$ python seed.py
```
To start the server and to see how the React application and Flask API are interacting, you can run the Flask application in one terminal by running the following prompt from the `server/` directory:
```
$ python app.py
```
Then open another terminal and run React from the root directory:
```
$ npm start --prefix client
```
## Usage ⛯

### Signing In or Signing Up for an Account

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

### Participant Actions

Within the 'Members' panel, group participants do not have access to any actions (i.e., adding/removing members, adding prompts), unlike the group host.

![Side by side comparison of what the 'Members' panel looks like for the group host (on the left) vs. a group participant. Unlike hosts, group participants have a read-only list of members and no additional buttons for adding new members or discussion prompts.](https://github.com/triciahughes/project-untitled/blob/main/assets/Comparison.jpg)

Clicking on 'Comments' beneath a given prompt will expand the view to show the comment thread for that prompt. Users can scroll through to read the entire conversation.

![User clicking on 'Comments' underneath a prompt to show the whole thread and scrolling through the conversation.](https://github.com/triciahughes/project-untitled/blob/main/assets/viewcomments.gif)

Clicking on the 'Add Comment' button beneath a given prompt will open an input field where users can add a new comment in that thread. Upon submit, the new comment will be added on to the end of the thread.

![User clicking on 'Add Comment' button underneath a prompt, typing a comment, and submitting. The comment they wrote immediately shows up at the end of the thread.](https://github.com/triciahughes/project-untitled/blob/main/assets/addcomment.gif)

### Logging Out

Upon clicking the 'Log Out' button at the top of the page, the user is redirected to the 'Sign In' page.

![User clicking on 'Log Out' button and being redirected to 'Sign In' page.](https://github.com/triciahughes/project-untitled/blob/main/assets/logout.gif)

## Roadmap 📍

Future additions include:
- Allow participants in a book club to suggest the next book, then allowing the Host to choose out of the suggestions or input their own.
- Integrate an API to be able to suggest books, and render book info easily.
- Implement rating/review system.

## Contributing ✍️

This project was created by [Bianca Aspin](https://github.com/baspin94) and [Tricia Hughes](https://github.com/triciahughes).
