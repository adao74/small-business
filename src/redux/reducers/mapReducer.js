import { SET_MAP_COORDINATES } from '../actions/types';

const initialState = {
  coordinates: null
};

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MAP_COORDINATES:
      return {
        ...state,
        coordinates: action.payload
      };
    default:
      return state;
  }
} 