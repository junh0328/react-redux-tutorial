import React from 'react';
import { useSelector } from 'react-redux';
import { changeInput, insert, remove, toggle } from '../modules/todos';
import Todos from '../components/Todos';
import useActions from '../lib/useAction';

const TodosContainer = () => {
  const { input, todos } = useSelector((state) => state.todos, []);

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    [],
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer);
