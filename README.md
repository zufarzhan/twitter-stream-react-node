## Twitter Feed App

This repository hosts source code for simple application which allows you to see Twitter feed in real time.  
You can specify search term for your feed.  

**NB! If you change serach term, it will be updated for all users.  
(server side uses only one Twitter stream connection at time)**    

The app was built using React and Node. For real time updates this app uses socket.io.

## Installation instructions

- Install [npm/node](https://nodejs.org/en/)
- Install the dependencies, run the following command from the root folder:
```sh
$ npm install
```
- Update server/server.js file with your personal Twitter API key
- Run the server with the following command(browser will be opened automatically):
```sh
$ npm start
```

## Other usefull commands
  
- To start only back-end run the following command
```sh
$ npm run start-back-end
```
- To start only front-end run the following command
```sh
$ npm start-front-end
```
- To test back-end run the following command
```sh
$ npm run test-back-end
```
- To test front-end run the following command
```sh
$ npm test
```

## Screenshot

![alt Kahoot! Points](https://github.com/zufarzhan/twitter-stream-react-node/blob/master/Screenshot.png)


## Main tools and libraries used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Semantic UI](https://react.semantic-ui.com/) - UI library for react.
- [Node.js](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - Node.js web application framework.
- [socket.io](https://socket.io/) - The fastest and most reliable real-time engine.

