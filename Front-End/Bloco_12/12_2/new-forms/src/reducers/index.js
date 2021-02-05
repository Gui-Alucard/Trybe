import { FORM_RESULT } from '../actions';

const INITIAL_STATE = {
  forms: {
    name: '',
    email: '',
    cpf: '',
    city: '',
    street: '',
    country: '',
    residence: '',
    resume: '',
  }
};

function reducerFormResult(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FORM_RESULT:
      return {...state, ...action.forms};
    default:
      return state;
  }
}

export default reducerFormResult;