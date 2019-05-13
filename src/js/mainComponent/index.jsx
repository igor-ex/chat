import { connect } from 'react-redux';
import Component from './MainComponent.jsx';
import * as actions from './actions';

const mapStateToProps = state => ({
    modules: state.config.modules,
    blocksActive: state.config.blocksActive,
});

const mapDispatchToProps = dispatch => ({
    initConnection: () => dispatch(actions.innitConnection()),
    emitUserName: (userName) => dispatch(actions.emitUserName(userName))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
