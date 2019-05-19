import Settings from './Settings';
import { connect } from 'react-redux';
import * as actions from "../actions";


const mapStateToProps = state => ({
    serviceMsg: state.config.serviceMsg
});

const mapDispatchToProps = dispatch => ({
    toggleServiceMsg: () => dispatch(actions.toggleServiceMsg()),
    toggleSettingsModule: () => dispatch(actions.toggleSettingsModule()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

