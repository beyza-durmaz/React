import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [filteredTodos, setFilteredTodos] = useState("All");
  const [todos, setTodos] = useState([
    {
      title: 'Learn JavaScript',
      isChecked: true,
    },
    {
      title: 'Learn React',
      isChecked: true,
    },
    {
      title: 'Have a life!',
      isChecked: true,
    },
  ]);

  let filteredTodosList = todos.filter((todo) => {
    if(filteredTodos === "All"){
      return todo;
    } else if(filteredTodos === "Active"){
      return todo.isChecked === false
    } else {
      return todo.isChecked === true
    }
  })

  function onDeletedTodo(deleteTodo){
    // console.log(deleteTodo);

    // var olan todo'ların bir kopyasını alıyoruz
    let todosCopy = [...todos];
    // console.log(todosCopy);

    // splice metodu ile her bir index değerine göre bir tanesini siliyoruz 
    todosCopy.splice(deleteTodo, 1);
    // console.log(todosCopy);

    // var olan todolarımıza bu kopya todomuzu da ekliyoruz
    setTodos(todosCopy)
  }

  function onPressedFilterBtn(filteredBtn){
    setFilteredTodos(filteredBtn);
  }

  function onClearCompleted(){
    const completedTodos = todos.filter((todo) => !todo.isChecked);
    setTodos(completedTodos);
  }

  return (
    <section className="todoApp">
      <Header todos={todos} setTodos={setTodos} />
      <Main todos={filteredTodosList} deleteSelectedTodo={onDeletedTodo} />
      <Footer todos={todos} selectedFilterTodo={onPressedFilterBtn} clearCompleted={onClearCompleted} />
    </section>
  );
}

export default App;
