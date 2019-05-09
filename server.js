const WebSocket = require('ws');

const server = new WebSocket.Server({port: 3000}, () => console.log('server started on port 3000'));

server.on('connection', ws => {
    ws.send(JSON.stringify({
        text: 'Привет от сервера!',
    }));
});

server.on('message', ws => {
    ws.send(JSON.stringify({
        text: 'сообщение пользователя!',
    }));
});