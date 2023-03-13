import React, { useState, useEffect } from 'react';

const initialFormValue = { title: "", isChecked: false }

function Header({ todos, setTodos }) {
    const [form, setForm] = useState(initialFormValue);

    useEffect(() => {
        setForm(initialFormValue)
    }, [todos]);

    // input değiştiğinde değişkeni form değişkenine gönderiyoruz
    function onChangeInput(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function onSubmit(e){
        e.preventDefault();
        if(form.title === ""){
            return false;
        }
        setTodos([...todos, form])
        console.log(form);
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input name='title' className="new-todo" value={form.title} onChange={onChangeInput} placeholder="What needs to be done?" autoFocus />
            </form>
        </header>
    )
}

export default Header