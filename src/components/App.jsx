import { Form } from './Form/Form';
import { Text } from './Text/Text';
import { ListItem } from './ListItem/ListItem';
import { useSelector } from 'react-redux';

export const App = () => {
  const todos = useSelector(state => state.todo.todos);

  return (
    <section className="todo-section">
      <h1 className="main-header">React todo App</h1>
      <Form />
      {todos.length > 0 ? (
        todos.map(el => <ListItem key={el.id} todo={el} />)
      ) : (
        <Text text={'No task found'} />
      )}
    </section>
  );
};
