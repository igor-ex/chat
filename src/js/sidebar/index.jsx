import { connect } from 'react-redux';
import Component from './Sidebar.jsx';
import * as actions from '../sidebar/actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    toggleChatModule: () => dispatch(actions.toggleChatModule()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
