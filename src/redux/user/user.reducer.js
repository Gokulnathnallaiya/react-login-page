const INITIAL_STATE = {
  currentUser: null,
  role: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "SET_ROLE":
      return {
        ...state,
        role: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
