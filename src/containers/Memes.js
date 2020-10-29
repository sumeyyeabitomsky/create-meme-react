import React, { Component } from "react";
import PropTypes from "prop-types";
import { getMemes } from "../actions/memes";
import { setSelectedMeme } from "../actions/selectedMeme";
import { connect } from "react-redux";
import Popup from "../components/Popup";

class Memes extends Component {
  componentDidMount() {}

  render() {
    const { memes, selectedMeme, getMemes, setSelectedMeme } = this.props;
    return (
      <div>
        <h2>Memes :|</h2>
        <br />
        <h3> Get some random memes by click on the button</h3>
        <input type="submit" value="GET MEMES" onClick={getMemes} />
        {memes
          ? memes.data.map((meme) => (
              <div key={meme.id} className="meme">
                <h4>{meme.name}</h4>
                <a onClick={() => setSelectedMeme(meme)}>
                  <img width={300} src={meme.url} />
                </a>
              </div>
            ))
          : null}
        {selectedMeme ? <Popup /> : null}
      </div>
    );
  }
}

Memes.propTypes = {
  getMemes: PropTypes.func.isRequired,
  setSelectedMeme: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  memes: state.memes,
  selectedMeme: state.selectedMeme,
});
const mapDispatchToProps = (dispatch) => ({
  getMemes: () => {
    dispatch(getMemes());
  },
  setSelectedMeme: (meme) => {
    dispatch(setSelectedMeme(meme));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Memes);
