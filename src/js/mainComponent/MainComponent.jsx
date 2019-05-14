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
    logInputRef = React.createRef();
    state = {
        logState: false,
        msg: ''
    };

    changeLogState = (ev) => {
        const authLog = this.logInputRef.current;
        const userName = authLog.value.trim();
        if (userName !== ""){
            this.setState({logState : true, userName : authLog.value});
            this.props.emitUserName(userName);
        }
        else {
            authLog.value = '';
            this.setState(state => {
                return {
                    ...state,
                    msg: "Please, enter your login"
                }
            });
        }
    };

    render() {
        const {
            modules,
            blocksActive,
        } = this.props;

        return (
            <div className="page-wrapper">
                <header className="page-wrapper__header">
                    {!this.state.logState ? modules.header.isExisted && <Header/> : modules.header.isExisted && <Header userName = {this.state.userName} />}
                </header>
                <main className="page-wrapper__content content">
                    <div className="content__sidebar">
                        {modules.sidebar.isExisted && <Sidebar/>}
                    </div>
                    {!this.state.logState ? <Login logInputRef = {this.logInputRef} changeLogState = {this.changeLogState} msg={this.state.msg}/> : blocksActive.chat ?
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