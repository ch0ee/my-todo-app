import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          content={todo.content}
          isComplete={todo.isComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
