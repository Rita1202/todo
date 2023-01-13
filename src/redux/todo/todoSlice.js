import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const currentToDo = state.todos.find(({ id }) => id === action.payload);
      currentToDo.completed = !currentToDo.completed;
    },
    editTodo: (state, action) => {
      const currentToDoIndex = state.todos.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.todos[currentToDoIndex].text = action.payload.editTextTodo;
      //   console.log(currentToDoIndex);
      //   state.todos.slice(currentToDoIndex, );
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
