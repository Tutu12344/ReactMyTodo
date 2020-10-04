import { GET_ALL_EVENTS } from "../actions";

import React, { useContext, useEffect } from "react";
import AppContext from "../contexts/AppContext";

const TodoList = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: GET_ALL_EVENTS });
  });
  return <div></div>;
};

export default TodoList;
