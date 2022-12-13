import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  padding: 1.6rem;
  background-color: rgb(255, 255, 255);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

  form {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  input[type='text'] {
    padding: 1.6rem;
    font-family: 'Poor Story', cursive;
    font-size: 1.4rem;
    border-radius: 4px;
    outline: none;
    border: 2px solid #b4b4b4;
  }
  input[type='text']:focus {
    outline: none;
    border: 2px solid #ff7347;
  }

  button {
    background-color: #dff9cf;
    border: none;
    font-family: 'Poor Story', cursive;
    font-size: 1.4rem;
    border-radius: 40px;
    padding: 1rem;
    transition: all 0.2s ease-in;
  }
  button:hover {
    background-color: #c7fda6;
    transition: all 0.2s ease-in;
  }
`;

const CreateTodo = ({ onSaveTodoData }) => {
  const [inputValue, setInputValue] = useState('');
  const inputValueChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const todoData = {
      content: inputValue,
      isComplete: false,
    };

    onSaveTodoData(todoData);
    setInputValue('');
  };

  return (
    <Section className='create-todo'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='추가할 할 일을 입력하세요.'
          value={inputValue}
          onChange={inputValueChangeHandler}
        />
        <button type='submit'>할 일 추가하기</button>
      </form>
    </Section>
  );
};

export default CreateTodo;
