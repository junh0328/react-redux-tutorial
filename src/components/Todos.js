import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({
  input, // 인풋에 입력되는 텍스트
  todos, // 할 일 목록이 들어 있는 객체
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput(''); // 등록 후 인풋 초기화
  };
  const onChange = (e) => onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
