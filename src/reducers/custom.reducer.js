import { TESTACTION } from '../actions/custom.actions';

const defaultState = {
  test:  false,
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
    default:
      return state;
  }
};

export default customReducer;