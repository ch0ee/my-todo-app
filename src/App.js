import React from 'react';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

const App = () => {
  const saveTodoDataHandler = (newTodoData) => {
    fetch(`http://localhost:3001/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodoData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('성공: ', data);
      })
      .catch((error) => {
        console.error('실패: ', error);
      });
    console.log('created!');
    window.location.reload();
  };

  return (
    <div className='app'>
      <CreateTodo onSaveTodoData={saveTodoDataHandler} />
      <Todos />
    </div>
  );
};

export default App;
