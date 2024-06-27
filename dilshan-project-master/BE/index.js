const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./Routes/routes");
const chatService = require('./Services/chatService');

dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:4200",
}));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
});

// Serve static files from the Angular app
app.use(express.static('public'));

// Initialize chat service
chatService.initialize(io);

app.use(routes);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
