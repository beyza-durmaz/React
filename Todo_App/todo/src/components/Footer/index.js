import React, { useState, useEffect } from 'react'

function Footer({ todos, selectedFilterTodo, clearCompleted }) {
    const btnList = [
        {
            name: "All",
            selected: false,
        },
        {
            name: "Active",
            selected: false,
        },
        {
            name: "Completed",
            selected: false,
        },
    ];

    const [buttonList, setButtonList] = useState(btnList);
    const [listHandler, setListHandler] = useState({});

    useEffect(() => {
        const newList = {};
        buttonList.forEach((b, i) => {
            newList[i] = b.isChecked ? "selected" : "";
        });
        setListHandler(newList);
    }, [buttonList]);

    function checkHandler(pressedBtn, todoIndex){
        const newTodoList = [...btnList];
        newTodoList.forEach((b, i) => {
            if(i === todoIndex){
                b.selected = true
            } else {
                b.selected = false
            }
        })
        setButtonList(newTodoList);
        selectedFilterTodo(pressedBtn.name)
    }

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length} </strong>
                items left
            </span>

            <ul className="filters">
                {
                    buttonList.map((btn, b) => (
                        <li key={b}>
                            <a href="#" className={listHandler[b]} onClick={() => checkHandler(btn, b)}>{btn.name}</a>
                        </li>
                    ))
                }
                {/* <li>
                    <a href="#/" className="selected">All</a>
                </li>
                <li>
                    <a href="#/">Active</a>
                </li>
                <li>
                    <a href="#/">Completed</a>
                </li> */}
            </ul>

            <button className="clear-completed" onClick={() => clearCompleted()}>
                Clear completed
            </button>
        </footer>
    )
}

export default Footer;