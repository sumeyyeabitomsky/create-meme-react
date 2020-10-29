import axios from "axios";
import { GET_MEMES, GET_MEMES_ERROR } from "./types";

export const getMemes = () => async (dispatch) => {
  try {
    console.log("get memes 1");
    const res = await axios.get(`https://api.imgflip.com/get_memes`);
    console.log("get memes 2");
    dispatch({
      type: GET_MEMES,
      payload: res.data.data.memes,
    });
  } catch (err) {
    dispatch({
      type: GET_MEMES_ERROR,
      payload: err,
    });
  }
};
