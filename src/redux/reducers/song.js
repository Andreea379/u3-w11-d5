import { ADD_SONG } from "../action/index";

const initialState = {
  song: null
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        song: action.payload
      };
    default:
      return state;
  }
};

export default songReducer;
