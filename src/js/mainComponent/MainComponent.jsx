import React from 'react';
import PureComponent from '../../base/pureComponent/PureComponent.jsx';
import Header from '../header/index.jsx';
import Sidebar from '../sidebar/index.jsx';
import Chat from '../chat/index.jsx';
import Footer from '../footer/index.jsx';
import './mainComponent.less';
import Login from "../login/Login";

export default class MainComponent extends PureComponent {
    constructor(props) {
        super(props);
        //this.props.initConnection();
        //this.props.emitUserName('Igor_' + Math.random());
    }

    state = {
        logState: false
    };

    changeLogState = (ev) => {
        const authLog = document.getElementById("authLog");
        const userName = authLog.value;
        if (userName !== ""){
            this.setState({logState : true});
            this.props.emitUserName(userName);
        }
        else {
            this.renderMsg("Please, enter your login");
            this.props.emitUserName(authLog.value);
        }
    };

    renderMsg = (msg) => {
        const msgBox = document.getElementById("msgBox");
        if (msg) {
            msgBox.innerText = msg;
        } else {
            msgBox.innerText = '';
        }
    }

    render() {
        const {
            modules,
            blocksActive,
        } = this.props;

        return (
            <div className="page-wrapper">
                <header className="page-wrapper__header">
                    {modules.header.isExisted && <Header/>}
                </header>
                <main className="page-wrapper__content content">
                    <div className="content__sidebar">
                        {modules.sidebar.isExisted && <Sidebar/>}
                    </div>{!this.state.logState ? <Login changeLogState = {this.changeLogState}/> : blocksActive.chat ?
                    <div className="content__chat">
                        {modules.chat.isExisted && <Chat/>}
                    </div> : null
                }
                </main>
                <footer className="page-wrapper__footer">
                    {modules.footer.isExisted && <Footer/>}
                </footer>
            </div>
        );
    }
}