import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Memes from "./containers/Memes";

function App() {
  return (
    <Provider store={store}>
      <main>
        <Memes />
      </main>
    </Provider>
  );
}

export default App;
