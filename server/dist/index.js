"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const colors_picker_1 = __importDefault(require("./colors-picker"));
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const server = (0, http_1.createServer)(app);
const socketio = new socket_io_1.Server(server, {
    cors: {
        origin: 'http://localhost:3000/',
        methods: ["GET", "POST"],
        credentials: true
    }
});
socketio.on('connection', (socket) => {
    // Connected
    const interval = setInterval(() => {
        socket.emit('SELECT_COLOR', (0, colors_picker_1.default)());
    }, 2000);
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', () => {
        if (interval) {
            clearInterval(interval);
        }
        socket.emit('SELECT_COLOR', (0, colors_picker_1.default)());
    });
});
server.listen(port, () => {
    console.log(`Connected on port ${port}`);
});
