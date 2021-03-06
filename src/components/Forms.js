import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";

const Forms = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => {
            return todo.id === id ? { title, id, completed } : todo
        })
        setTodos(newTodo);
        setEditTodo("");
    };
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        }
        else {
            setInput("");
        }
    }, [setInput, editTodo]);

    const onInputChange = (e) => {
        setInput(e.target.value);
    };
    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        }
        else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }



    }
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter your task" className="task-input" value={input} required onChange={onInputChange} />
            <button className="button-add btn-11" type="submit">{editTodo ? "Save?" : "Add"}</button>
        </form>
    )
}

export default Forms;
