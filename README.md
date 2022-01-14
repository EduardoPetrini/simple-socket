# NodeJS simple-socket
This is a project meant to explore the idea of web socket communication.

## Features
We use [socket.io](https://socket.io/) in order to allow us create a communication channel between front and backend interfaces.

It is integrated with MongoDB through [Mongoose](https://mongoosejs.com/).

## Install
`npm install`
 - Configure `.env` with database uri and password. It is option put the connection port.
 ```
DB_URI=mongodb+srv://user:<password>@server/database?retryWrites=true&w=majority
DB_PASS=<password>
PORT=3000
 ```

 ## Run
 `npm start`
 Then open the browser on http://localhost:3000 and start using it.

 ## Test
 Coming soon...

 ## Next steps
 Coming soon...
