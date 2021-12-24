import express, {
    Application, Request, Response
} from "express";
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import colorPicker from './colors-picker';

const app: Application = express()
const port: number = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const server = createServer(app);
const socketio = new Server(server, {
    cors: {
        origin: 'http://localhost:3000/',
        methods: ["GET", "POST"],
        credentials: true
    }
});

socketio.on('connection', (socket) => {
    // Connected

    const interval = setInterval(() => {
        socket.emit('SELECT_COLOR', colorPicker());
    }, 2000);

    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', () => {
        if (interval) {
            clearInterval(interval);
        }
        socket.emit('SELECT_COLOR', colorPicker());
    });
});

server.listen(port, () => {
    console.log(`Connected on port ${port}`)
})