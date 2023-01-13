import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addTodo } from 'redux/todo/todoSlice';
import { useDispatch } from 'react-redux';

export const Form = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const onChangeHandler = e => {
    const newTodo = {
      id: nanoid(),
      text: todo,
      completed: false,
    };
    if (todo.trim().length > 0) {
      dispatch(addTodo(newTodo));
    }
    setTodo('');
  };

  return (
    <form onSubmit={e => e.preventDefault()} className="todo-form">
      <input
        className="todo-input"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        type="text"
        placeholder="Create a new todo..."
        maxLength="25"
      />
      <button
        onClick={() => onChangeHandler()}
        type="button"
        className="todo-add"
      >
        Add
      </button>
    </form>
  );
};
