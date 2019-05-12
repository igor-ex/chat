import React from 'react';
import PureComponent from '../../base/pureComponent/PureComponent.jsx';
import './footer.less';

export default class Footer extends PureComponent {
    render() {
        return (
            <div className="footer">
                <h1>Footer</h1>
                <div style={{display: 'flex'}}>
                    <ul>
                        <li>реконнект</li>
                        <li>организовать так, чтобы на сервере при подключении пользователя код
                            не ждал пока будет передана история сообщений а назначил слушателей
                            в первую очередь</li>
                        <li>окошко авторизации</li>
                        <li>отображение имени пользователя</li>
                        <li>сделать сообщения сервера другого цвета чем сообщения пользователей</li>
                    </ul>
                    <ul>
                        <li>красивая прокрутка</li>
                        <li>кнопочки открытия - закрытия</li>
                        <li>убирать имя пользователя в чате если повторяется</li>
                        <li>когда очень длинное сообщение без пробелов, то исчезает вертикальная
                            прокрутка, а горизонтальная не образуется</li>
                        <li>исправить БЭМ у сайдбара и месиджей если нужно</li>
                        <li>tags to html entities in messages and users, nl2br</li>
                    </ul>
                </div>
            </div>
        );
    }
}