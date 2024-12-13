export const ADD_SONG = "ADD_SONG";
export const ADD_SEARCH = "ADD_SEARCH";

export const AddSongAction = (songs) => {
  return {
    type: ADD_SONG,
    payload: songs
  };
};

export const AddSearchAction = (search) => {
  return {
    type: ADD_SEARCH,
    payload: search
  };
};
