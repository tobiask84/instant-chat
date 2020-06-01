# Instant-chat

This is a chat application which is part of an 
example project written as part of the Docler Holding application process.
The description and requirements of the task can be found 
[here](https://www.klockconsulting.net/static/hw.pdf).   

# Hosted Demo
The hosted demo of the implemented solution can be found 
[here](https://www.klockconsulting.net:8080).   
If you type this URL into your phone remember that it has to start with https.

# How does it work
The app is consists of a frontend, and a backend which both are in the same repository.
 
The backend runs with express, typescript and socket.io. It does not have a database. 

The frontend uses react and socket.io. The app keeps state through the react context api and persists settings and a userId (UUID) in the local storage.

The app uses 
* Yarn
* React
* Typescript
* prettier
* ESLint
* husky pre-commit hooks to prevent committing linting errors.
* prettier to format the codebase
* Jest for unit testing

# Set up and run
The app is created with node 14.   
 [Install yarn](https://classic.yarnpkg.com/en/docs/install) if you do not yet have it   
    
### Start the backend:    
```
cd backend
yarn install
yarn run start
```
This will start the express server on port 3000.   
You can optionally start the backend server with TLS certificates by settings these env vars before starting the server:
```
INSTANT_CHAT_PRIVATE_KEY=/.../privkey.pem \
INSTANT_CHAT_FULL_CHAIN=/.../fullchain.pem \
```

### Start the frontend:    
```
cd frontend
yarn install
yarn run start
```
This will start the development server with hot reloading on port `8080`. 
The website will try to connect to `localhost:3000` by default.   

You can build the app into a dist dir like this:
```
yarn run build
```
The artifact will by default run against localhost:3000 as backend. 
To see how to use a different backend url check the 
`build:klockConsulting` run script in the `package.json`.

# Checkbox

### Requirements
- [X] You have to use React as your framework;
- [X]  You have to use CSS preprocessors;
- [X] You have to write the app in TypeScript;
- [X] It should work on every desktop and phone, so you have to make responsive
design. And it has to work both portrait and landscape orientation;
- [X] It should work on desktop/tablet/phone at least on the following browsers:
Chrome, Firefox and Safari. Consider the latest versions for each browser;
- [X] Please, do not use any tool like or similar to create-react-app;
- [X] Write at least some tests that would cover the main functionality of your app.
We do not expect to be 100% test covered;
- [X] Write clean, commented, small and modularized code;
- [X] Working code, that works if we serve it with the http server and open in a
browser;
- [X] README file that contains:
- [X] a. What is it;
- [X] b. How does it work;
- [X] c. How could we setup and run it;
- [X] d. Create a checkbox list of all the features required by this homework
and check the ones you were able to accomplish;

### Optional
- [ ] JSdoc markdown.
- [X] CSS Modules or any other css solution.
- [X] If your application needs any state management tool... (used React contect API)

### Chat Page optional
- [ ] Smiles support;
- [X] Unread messages count in the chat tab;
- [X] Link parser
- [X]  own ideas (scroll on message send/receive, refocus input on enter)
 
### Settings Page optional
- [ ] Internationalization (It’s enough to have just one additional language);
- [X] Add support to unread chat notifications;

# Some comments
- It was required to make the notification tab blink when there are unread messages. This might be a bit over the top and could annoy the user.
- I assume when it is required to make "the tab" blink, we are talking about the navbar and not about the browser tab
