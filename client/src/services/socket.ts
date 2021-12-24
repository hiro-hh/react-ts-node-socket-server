import socketio from "socket.io-client";

export const socket = socketio(`${process.env.REACT_APP_SOCKET_URL}`, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 1000,
    transports: ['websocket']
});
