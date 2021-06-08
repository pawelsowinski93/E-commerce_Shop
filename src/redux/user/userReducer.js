import { userActionTypes } from "./userTypes";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER: {
      const { currentUser } = action.payload;

      return {
        ...state,
        currentUser
      };
    }
    default:
      return state;
  }
};

export default userReducer;
