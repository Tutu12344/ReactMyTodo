import {
  CREATE_EVENT,
  DELETE_EVENT,
  DELETE_ALL_EVENTS,
  GET_ALL_EVENTS,
} from "../actions";
import { db } from "../utils/firebase";
const todoEvent = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      db.collection("todos")
        .add({
          todo: action.todo,
          operatedAt: action.operatedAt,
        })
        .then(function (docRef) {
          const event = {
            id: docRef.id,
            todo: action.todo,
            operatedAt: action.operatedAt,
          };
          const length = state.length;
          const id = length === 0 ? 1 : state[length - 1].id + 1;
          return [...state, { id, ...event }];
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
          return state;
        });
      return state;
    case DELETE_EVENT:
      return state;
    case DELETE_ALL_EVENTS:
      return state;
    case GET_ALL_EVENTS:
      db.collection("todos")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
          });
        });
      return state;
    default:
      return state;
  }
};

export default todoEvent;
