import { TESTACTION, UPDATEEMAILACTION } from '../actions/custom.actions';

const defaultState = {
  test:  false,
  email: '',
};

const customReducer = (state = defaultState, action) => {
  switch (action.type) {

    case TESTACTION:
      if(action.payload === true){
        return {
          ...state,
          test: true
        }
      }else{
        return state;
      }
    break; 
    case UPDATEEMAILACTION: 
      return {
          ...state,
          email: action.payload
        }
    default:
      return state;
  }
};

export default customReducer;