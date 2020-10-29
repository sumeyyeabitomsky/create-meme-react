import { SET_SELECTED_MEME } from "./types";

export const setSelectedMeme = (selectedMeme) => async (dispatch) => {
  dispatch({
    type: SET_SELECTED_MEME,
    data: selectedMeme,
  });
};
