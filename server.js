const WebSocket = require('ws');

const server = new WebSocket.Server({port: 4000}, () => console.log('server started on port 4000'));

let userCounter = 1;
const usersArray = [];
const users = new Map();
const mTypes = Object.freeze({
    new_message: 'new_message',
    user_list: 'user_list'
});

function sendToAllArray(rawData, excluding) {
    if (!users.length) {
        return;
    }
    const data = JSON.stringify(data);
    for (let i = 0; i < users.length; i++) {
        if (excluding && users[i].ws === excluding) {
            continue;
        }
        users[i].ws.send(data);
    }
}

function sendToAll(rawData, excluding) {
    console.log(users.size, 'users size');
    console.log(rawData);
    if (!users.size) {
        return;
    }
    const data = JSON.stringify(rawData);
    for (let [key] of users) {
        if (excluding && key === excluding) {
            continue;
        }
        key.send(data);
    }
}

function sendUserList() {
    const userNames = [];
    for (let [key, value] of users) {
        userNames.push(value);
    }
    sendToAll({
        mType: mTypes.user_list,
        content: userNames
    });
}

server.on('connection', ws => {
    const userName = 'user_' + userCounter++;
    usersArray.push({userName, ws});
    users.set(ws, userName);
    ws.send(JSON.stringify({
        mType: mTypes.new_message,
        content: {text: 'Привет от сервера!'}
    }));
    sendUserList();
    ws.on('message', text => {
        sendToAll({
            mType: mTypes.new_message,
            content: {user: 'system', text:'пользователь ' + userName + ' подключился'}
        }, ws);
    });

    ws.on('message', text => {
        sendToAll({
            mType: mTypes.new_message,
            content: {user: users.get(ws), text}
        }, ws);
    });

    ws.on('close', text => {
        sendUserList();
        sendToAll({
            mType: mTypes.new_message,
            content: {user: 'system', text: 'пользователь ' + userName + ' покинул нас'}
        }, ws);
    });
});
