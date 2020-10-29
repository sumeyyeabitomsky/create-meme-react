import { GET_CAPTION, GET_CAPTION_ERROR, SET_CAPTION } from "../actions/types";

const initialState = {
  loading: true,
  data: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CAPTION:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_CAPTION_ERROR:
      return { ...state, loading: false, data: null };
    case SET_CAPTION:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
