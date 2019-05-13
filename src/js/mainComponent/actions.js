import constants from '../../constants/constants';

export const innitConnection = () => ({ type: constants.INIT_CONNECTION });
export const emitUserName = (userName) => ({ type: constants.EMIT_USER_NAME, userName });