import { FETCH_ALL_GREETINGS } from './actionTypes';
import * as api from '../../data/api';

// API action creators
export const getGreetings = () => async (dispatch) => {
  try {
    const data = await api.fetchGreetings();

    dispatch({ type: FETCH_ALL_GREETINGS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};
