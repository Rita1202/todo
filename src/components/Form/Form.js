import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addTodo } from 'redux/todo/todoSlice';
import { useDispatch } from 'react-redux';

export const Form = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const onSubmitHandler = e => {
    e.preventDefault();
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

  //   useEffect(() => {
  //     const keyDownHandler = event => {
  //       console.log('User pressed: ', event.key);
  //       if (event.key === 'Enter') {
  //         event.preventDefault();
  //         onSubmitHandler();
  //       }
  //     };
  //     document.addEventListener('keydown', keyDownHandler);

  //     return () => {
  //       document.removeEventListener('keydown', keyDownHandler);
  //     };
  //   }, []);

  return (
    <form onSubmit={onSubmitHandler} className="todo-form">
      <input
        className="todo-input"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        type="text"
        placeholder="Create a new todo..."
        maxLength="25"
      />
      <button className="todo-add">Add</button>
    </form>
  );
};
