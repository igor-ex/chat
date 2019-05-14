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
const clientMTypes = Object.freeze({
    message: 'message',
    user_name: 'user_name'
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

function connectionCallback(ws, userName) {
    usersArray.push({userName, ws});
    users.set(ws, userName);
    ws.send(JSON.stringify({
        mType: mTypes.new_message,
        content: {user: 'system', text: 'Привет от сервера!'}
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
    let userName;
    ws.on('message', rawData => {
        const data = JSON.parse(rawData);
        if (!users.has(ws) && data.mType !== clientMTypes.user_name) {
            return;
        }
        switch (data.mType) {
            case clientMTypes.user_name:
                userName = data.content;
                connectionCallback(ws, userName);
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
                break;
            case clientMTypes.message:
                const message = {user: users.get(ws), text: data.content};
                addMessage(message);
                sendToAll({
                    mType: mTypes.new_message,
                    content: message
                }, ws);
                break;
            default:
                console.log('unfamiliar clientMType');
        }

    });
});
