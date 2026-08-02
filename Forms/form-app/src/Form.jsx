import {useState} from "react";
export default function form(){
    let[fullName,setFullName] = useState("adarsh");

    let handleNameChange = (event) =>{
        setFullName(event.target.value);
    }
    return(
        <form>
            <label htmlFor="username">Full Name </label>
            <input type="text" placeholder="enter your name"  value={fullName}
            onChange = {handleNameChange} id="username"/>
            <button>submit</button>
        </form>
    );
}