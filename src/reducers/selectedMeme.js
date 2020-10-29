import { SET_SELECTED_MEME } from "../actions/types";

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_MEME:
      return action.data
        ? {
            ...state,
            ...action.data,
            boxes:
              action.data && action.data.boxes
                ? action.data.boxes
                : !action.data
                ? null
                : new Array(action.data.box_count).fill(""),
          }
        : initialState;

    default:
      return state;
  }
}
