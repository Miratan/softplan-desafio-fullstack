import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants'

const initialState = {
  loading: false,
  error: null,
};

export default function loginReducer(state = initialState, action) {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error.message
      }
    default:
      return state;
  }
}
