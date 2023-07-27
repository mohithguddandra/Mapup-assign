import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import Floating from "./components/Floating";
import Headerfooter from "./components/Headerfooter";

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <div>
          <Headerfooter />
        </div>
        <div className="floating-controls">
          <Floating />
        </div>
      </React.StrictMode>
    </Provider>
  );
}

export default App;
