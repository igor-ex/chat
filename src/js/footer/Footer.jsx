import React from 'react';
import PureComponent from '../../base/pureComponent/PureComponent.jsx';
import './footer.less';

export default class Footer extends PureComponent {
    render() {
        return (
            <div className="footer">
                <h1>Todo:</h1>
                <div style={{display: 'flex'}}>
                    <ul>
                        <li>реконнект</li>
                        <li>логика отображения и обращения с оффлайновыми сообщениями</li>
                        <li>организовать так, чтобы на сервере при подключении пользователя код
                            не ждал пока будет передана история сообщений а назначил слушателей
                            в первую очередь</li>
                    </ul>
                    <ul>
                        <li>красивая прокрутка</li>
                        <li>кнопочки открытия - закрытия</li>
                        <li>исправить БЭМ у сайдбара и месиджей если нужно</li>
                    </ul>
                </div>
            </div>
        );
    }
}