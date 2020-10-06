import { GET_ALL_EVENTS } from "../actions";

import React, { useContext, useEffect, useState } from "react";
import AppContext from "../contexts/AppContext";
import Button from "@material-ui/core/Button";
import { db } from "../utils/firebase";
import { For } from "react-loops";
import Todo from "./Todo";
const TodoList = () => {
  const { state, dispatch } = useContext(AppContext);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    dispatch({ type: GET_ALL_EVENTS });
    // var d = [];

    const searchTodos = async () => {
      // Firestoreのコレクションを指定してデータ取得。今回は全量を検索
      await db
        .collection("todos")
        .get()
        .then((querySnapshot) => {
          // querySnapshot.forEach((doc) => {
          // return Object.assign(doc.data(), { id: doc.id });
          // doc.data();
          // setTodos(doc.data());
          // d.push(doc.data());
          // });
          setTodos(
            querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        });
    };
    searchTodos();
    console.log(todos);
    // setTodos(d);
  }, []);

  const getTodo = (e) => {
    //２回クリックするのを防ぐ
    e.preventDefault();
    // console.log("state" + state[0].operatedAt);
    // console.log(todos);
    dispatch({
      type: GET_ALL_EVENTS,
    });
    // console.log(state.todoEvent);
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={getTodo}>
        取得
      </Button>
      <div className="list">
        <h1>Todo</h1>
        {todos.map((value, index) => (
          <Todo key={index} value={value} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
