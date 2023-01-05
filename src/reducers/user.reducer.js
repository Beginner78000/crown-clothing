import { SET_CURRENT_USER, SIGN_OUT, SIGN_OUT_FAILED } from "../actions/user.action";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        currentUser: null,
      };
    case SIGN_OUT_FAILED:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default userReducer;
