import io from 'socket.io-client';
const SERVER_URL = 'http://13.209.7.200:4000'; // 서버 주소 설정
export const initializeSocket = () => {
    const socket = io(SERVER_URL, { transports: ['websocket'] });

    socket.on('connect', () => {
        console.log('Socket connected:', socket.id);
    });

    socket.on('disconnect', () => {
        console.log('Socket disconnected');
    });

    socket.on('hello', (arg) => {
        console.log(arg)
    })

    socket.emit('customEvents', () => {})

    socket.on('receiveMessage', (msg) => {
        console.log('Message Received,,,,,,,', msg)
    })



    return socket;
};