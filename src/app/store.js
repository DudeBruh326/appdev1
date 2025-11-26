import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
<<<<<<< HEAD
});
=======
});

>>>>>>> d1394555a18fd4805ce357ccc815f5bfe3c5469e
