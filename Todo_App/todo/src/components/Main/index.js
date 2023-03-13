import React, { useState, useEffect } from 'react'

function Main({ todos, deleteSelectedTodo, editSelectedTodo }) {
    const [newTodo, setNewTodo] = useState(todos);
    const [listHandler, setListHandler] = useState({});

    useEffect(() => {
        setNewTodo(todos)
    }, [todos])

    useEffect(() => {
        const newList = {};
        newTodo.forEach((t, i) => {
            newList[i] = t.isChecked ? "completed" : "";
        });
        setListHandler(newList);
    }, [newTodo]);

    const checkHandler = (todoIndex) => {
        const newTodoList = [...newTodo]
        newTodoList[todoIndex].isChecked = !newTodoList[todoIndex].isChecked;
        setNewTodo(newTodoList);
    }

    function deleteTodo(index, title){
        deleteSelectedTodo(index)
    }

    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {
                    newTodo && newTodo.map((todo, i) => (
                        <li key={i} className={listHandler[i]}>
                            <div className="view">
                                <input id={`task-${i}`} className="toggle" type="checkbox" checked={todo.isChecked} onChange={() => checkHandler(i)} />
                                <label htmlFor={`task-${i}`} >{todo.title}</label>
                                <button className='destroy' onClick={() => deleteTodo(i, todo.title)} ></button>
                            </div>
                        </li>
                    ))
                }
                {/* <li className="completed">
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>Learn JavaScript</label>
                        <button className="destroy"></button>
                    </div>
                </li>
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>Learn React</label>
                        <button className="destroy"></button>
                    </div>
                </li>
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>Have a life!</label>
                        <button className="destroy"></button>
                    </div>
                </li> */}
            </ul>
        </section>
    )
}

export default Main