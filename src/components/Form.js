import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from "../actions";

import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { timeCurrentIso8601 } from "../util";

import AppContext from "../contexts/AppContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const Form = () => {
  const { state, dispatch } = useContext(AppContext);
  const classes = useStyles();
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    // console.log(value);
  };
  const addTodo = (e) => {
    //２回クリックするのを防ぐ
    e.preventDefault();
    // console.log("state" + state[0].operatedAt);

    dispatch({
      type: CREATE_EVENT,
      todo: value,
      operatedAt: timeCurrentIso8601(),
    });
    setValue("");
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
          value={value}
          onChange={handleChange}
        />
      </form>

      <Button variant="contained" color="primary" onClick={addTodo}>
        追加
      </Button>

      {state.todoEvent.map((todo, index) => console.log(todo))}
    </div>
  );
};

export default Form;
