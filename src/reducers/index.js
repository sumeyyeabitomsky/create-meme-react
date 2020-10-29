import { combineReducers } from "redux";
import memes from "./memes";
import caption from "./caption";
import selectedMeme from "./selectedMeme";

export default combineReducers({
  memes,
  caption,
  selectedMeme,
});
