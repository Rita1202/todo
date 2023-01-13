import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteTodo, toggleTodo, editTodo } from 'redux/todo/todoSlice';
import done from './done-1.svg';

export const ListItem = ({ todo }) => {
  const [editTextTodo, setEditTextTodo] = useState(todo.text);
  const [isEdited, setIsEdited] = useState(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = id => {
    dispatch(deleteTodo(id));
  };

  const toggleHandler = id => {
    dispatch(toggleTodo(id));
  };

  const editHandler = id => {
    dispatch(editTodo({ id, editTextTodo }));
  };

  return (
    <div className="todo-wrapper">
      {todo.completed && <img src={done} className="todo-done" />}

      {isEdited ? (
        <input
          type="text"
          value={editTextTodo}
          onChange={e => setEditTextTodo(e.target.value)}
          className="edit-input"
          maxLength="25"
        />
      ) : (
        <p
          onClick={() => {
            toggleHandler(todo.id);
            setChecked(true);
          }}
          checked={checked}
          className={`todo-desc ${
            todo.completed ? 'list-item-completed' : 'list-item-uncompleted'
          }`}
        >
          {todo.text}
        </p>
      )}

      <button
        onClick={() => deleteHandler(todo.id)}
        type="button"
        className="todo-delete"
      >
        Delete
      </button>
      {isEdited ? (
        <button
          onClick={() => {
            editHandler(todo.id);
            setIsEdited(false);
          }}
          type="button"
          className="todo-edit"
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => {
            setIsEdited(true);
          }}
          type="button"
          className="todo-edit"
        >
          Edit
        </button>
      )}
    </div>
  );
};
