import { ADD_SEARCH } from "../action/index";

const initialState = {
  searched: null
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH:
      return {
        ...state,
        searched: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
