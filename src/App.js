import React,{useState} from 'react';
import Header from './components/Header';
import Forms from './components/Forms';
import TodosList from './components/TodosList';
import "./App.css"

function App() {
  const[input,setInput] = useState("");
  const[todos,setTodos] = useState([]);
  const[editTodo,setEditTodo] = useState(null);


  const deleteAll= ()=>{
    setTodos([])
  }


  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header/>
        </div>
        <div className="todo-parent">
          <Forms
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo = {editTodo}
          setEditTodo = {setEditTodo}
          />
          <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
          <button className="delete-all" onClick={()=>{deleteAll()}}>Delete All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
