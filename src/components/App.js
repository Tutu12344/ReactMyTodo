import React, { useReducer } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import "../App.css";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";

function App() {
  const initialState = {
    todoEvent: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div>
        <Navbar />
        <Form />
      </div>
    </AppContext.Provider>
  );
}

export default App;
