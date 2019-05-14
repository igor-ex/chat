import { connect } from 'react-redux';
import Component from './Chat.jsx';
import * as actions from './actions';

const mapStateToProps = state => ({
    status: state.config.modules.chat.status,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
