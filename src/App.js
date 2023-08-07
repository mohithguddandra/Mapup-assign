import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Headerfooter from "./components/Headerfooter";
//import Floating from "./components/Floating";
//<Floating />
import Form from "./components/Form";

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <div>
          <Headerfooter />
        </div>
        <div className="floating-controls">
          <Form />
        </div>
      </React.StrictMode>
    </Provider>
  );
}

export default App;
