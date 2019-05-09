import React from 'react';
import PureComponent from '../../base/pureComponent/PureComponent.jsx';
import Header from '../header/index.jsx';
import Sidebar from '../sidebar/index.jsx';
import Chat from '../chat/index.jsx';
import Footer from '../footer/index.jsx';
import './mainComponent.less';

export default class MainComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.props.initConnection();
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
                    </div>
                    {blocksActive.chat ?
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