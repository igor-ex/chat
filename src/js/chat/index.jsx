import { connect } from 'react-redux';
import Component from './Chat.jsx';
import * as actions from './actions';

const mapStateToProps = state => ({
    status: state.config.modules.chat.status,
});

const mapDispatchToProps = dispatch => ({
    toggleChatModule: () => dispatch(actions.toggleChatModule()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
