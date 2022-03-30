import { FETCH_ALL_GREETINGS } from '../actions/actionTypes';

const greetings = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_GREETINGS:
      return [...state, action.payload.data];
    default:
      return state;
  }
};

export default greetings;
