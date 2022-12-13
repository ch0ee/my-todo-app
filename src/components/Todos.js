import React, { useEffect, useState } from 'react';
import DateIndicator from './DateIndicator';
import TodoList from './TodoList';
import styled from 'styled-components';

const Section = styled.div`
  padding: 1.6rem;
  background-color: rgb(255, 255, 255);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const Todos = () => {
  const [todos, setTodos] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:3001/todos')
        .then((res) => {
          if (!res.ok) {
            throw Error('네트워크 응답이 올바르지 않습니다.');
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setTodos(data);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <Section className='todos'>
      <DateIndicator />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {todos && <TodoList todos={todos} />}
    </Section>
  );
};

export default Todos;
