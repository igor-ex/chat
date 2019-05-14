import { connect } from 'react-redux';
import Component from './Header.jsx';
import * as actions from "./actions";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    toggleSettingsModule: () => dispatch(actions.toggleSettingsModule()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
