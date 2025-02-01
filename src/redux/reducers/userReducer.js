import { LOGIN_USER, LOGOUT_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  username: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
} 