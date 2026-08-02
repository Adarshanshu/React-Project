import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos,setTodos] = useState([{task:"sample task", id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        console.log("new task added");
        setTodos([...todos,{task:newTodo,id:uuidv4()}]);
        setNewTodo("");
    }
    let updateTask = (e)=>{
        setNewTodo(e.target.value);
    }

    let DeleteTask = (id)=>{
        setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id != id));
    }
    return(
      <div>
        <h1>To-do App</h1>
          <input type="text"placeholder="enter task" value={newTodo} onChange={updateTask} ></input>
        <button onClick={addNewTask}>add task</button>
        <h3>tasks to do</h3>
        <ul>
            {todos.map((todo)=>(
    
                 <li key={todo.id}>{todo.task}
                 <span>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <button onClick={()=>DeleteTask(todo.id)}>Delete</button>
                 </span>
                 </li>
                 
            ))}
        
        </ul>
      </div>
    )
}