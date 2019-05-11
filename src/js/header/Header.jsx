import React from 'react';
import PureComponent from '../../base/pureComponent/PureComponent.jsx';
import './header.less';

export default class Header extends PureComponent {
    render() {
        return (
            <div className="header">
                <h1><a href="http://localhost:3000">HEADER</a></h1>
            </div>
        );
    }
}