const WebSocket = require('ws');

const server = new WebSocket.Server({port: 4000}, () => console.log('server started on port 4000'));

const MESSAGE_LIMIT = 100;
const MESSAGE_DISCHARGE = 10;
let userCounter = 1;
const usersArray = [];
const users = new Map();
const messages = [];
const mTypes = Object.freeze({
    new_message: 'new_message',
    user_list: 'user_list',
    message_list: 'message_list'
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

function addMessage(message) {
    messages.push(message);
    if (messages.length > MESSAGE_LIMIT) {
        messages.length = MESSAGE_DISCHARGE;
    }
}

function connectionCallback(ws) {
    const userName = 'user_' + userCounter++;
    usersArray.push({userName, ws});
    users.set(ws, userName);
    ws.send(JSON.stringify({
        mType: mTypes.new_message,
        content: {text: 'Привет от сервера!'}
    }));
    ws.send(JSON.stringify({
        mType: mTypes.message_list,
        content: messages
    }));
    sendUserList();
    const message = {user: 'system', text:'пользователь ' + userName + ' подключился'};
    addMessage(message);
    sendToAll({
        mType: mTypes.new_message,
        content: message
    }, ws);
    return userName;
}

server.on('connection', ws => {
    const userName = connectionCallback(ws);

    ws.on('message', text => {
        const message = {user: users.get(ws), text};
        addMessage(message);
        sendToAll({
            mType: mTypes.new_message,
            content: message
        }, ws);
    });

    ws.on('close', text => {
        users.delete(ws);
        sendUserList();
        const message = {user: 'system', text: 'пользователь ' + userName + ' покинул нас'};
        addMessage(message);
        sendToAll({
            mType: mTypes.new_message,
            content: message
        }, ws);
    });
});
