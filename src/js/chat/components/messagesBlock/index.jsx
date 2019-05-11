import MessageBlock from './MessageBlock.jsx';
import * as actions from "./actions";
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return state.messages;
};

const mapDispatchToProps = dispatch => {
    return {
        emitMessage: data => dispatch(actions.emitMessage(data)),
        setCurrentMessage: data => dispatch(actions.setCurrentMessage(data))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MessageBlock);

