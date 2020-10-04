import React from "react";
import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from "../actions";
const todoEvent = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { todo: action.todo, operatedAt: action.operatedAt };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];

    //   return state;

    case DELETE_EVENT:
      return state;
    case DELETE_ALL_EVENTS:
      return state;
    default:
      return state;
  }
};

export default todoEvent;
