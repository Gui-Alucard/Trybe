import { LOGIN_REQUEST } from '../actions';

const INITIAL_STATE = {
  login: {
    email: '',
    pass: '',
  }
};

function reducerLogin(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, ...action};
    default:
      return state;
  }
}

export default reducerLogin;