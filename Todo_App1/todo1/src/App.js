import React, { useState } from 'react';
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      value: "Learn Javascript",
    },
    {
      id: Math.floor(Math.random() * 1000),
      value: "Learn React",
    }
  ]);

  const addTodo = () => {
    const newTodos = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    if (newItem === "") {
      alert('Please Enter a Todo!')
      return false;
    }

    setTodos(prevTodos => [...prevTodos, newTodos])
    setNewItem("");
    // console.log(newItem, newTodos.id);
  }

  const removeTodo = (id) => {
    const newArray = todos.filter(newTodos => newTodos.id !== id)
    setTodos(newArray)
  }

  return (
    <div className='App'>
      <header>
        <h1>Todo List</h1>
      </header>
      <section className="main">
        <div className='inputBtn'>
          <input
            type="text"
            placeholder='Add todo...'
            className='input'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className='add' onClick={() => addTodo()} >+</button>
        </div>

        <div className="listContainer">
          <ul className='list'>
            {
              todos.map((newTodos) => {
                return (
                  <li key={newTodos.id}>{newTodos.value} <button className='deleteBtn' onClick={() => removeTodo(newTodos.id)}>×</button> </li>
                )
              })
            }
          </ul>
        </div>
      </section>
    </div>
  )
}

export default App;
