import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos ,setTodos] = useState([{task:"sample task", id : uuidv4()}]);
    let [newTodo , setNewTodo] = useState("");

    let addTask = ()=>{

       setTodos((prevTodos)=>{
        return [...prevTodos ,{task: newTodo ,id:uuidv4()}];
       });
        setNewTodo("");

    }

    let updateTodoValue=(event)=>{
       setNewTodo(event.target.value);
    }

    let DeleteTask = (id)=>{
         setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id != id));

    }

    return(
        <div>
            <h1> to-do app</h1>
            <input type="text" placeholder="enter the task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addTask}>add Task</button>
            <h3>tasks to do</h3>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={()=> DeleteTask(todo.id)}>Delete</button>
                        </li>
                     ) )
                }
            </ul>
        </div>

    );
}