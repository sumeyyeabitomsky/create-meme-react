import axios from "axios";
import { GET_CAPTION, GET_CAPTION_ERROR, SET_CAPTION } from "./types";
import config from "/config.js";

export const getCaption = (options) => async (dispatch) => {
  try {
    const res = await axios.post(
      `https://api.imgflip.com/caption_image`,
      getFormData(options)
    );
    dispatch({
      type: GET_CAPTION,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: GET_CAPTION_ERROR,
      payload: err,
    });
  }
};

export const setCaption = (options) => async (dispatch) => {
  dispatch({
    type: SET_CAPTION,
    payload: options,
  });
};

const getFormData = (options) => {
  const bodyFormData = new FormData();
  bodyFormData.append("username", config.imgFlip.username);
  bodyFormData.append("password", config.imgFlip.password);
  bodyFormData.append("template_id", options.template_id);

  options.boxes.forEach((item, index) => {
    bodyFormData.append(`boxes[${index}][text]`, item);
  });
  return bodyFormData;
};
