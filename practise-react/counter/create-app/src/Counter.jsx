import {useState} from "react";
import "./Counter.css"
export default function(){
    let[count,setCount] = useState(0);

    function doSomething(){
        setCount(count+1);
    }
 return (
    <div>
    <h1>click on the button to update the counter</h1>
    <div className="abc">
        <p >count is = {count}</p>
    <button onClick={doSomething}>click to increase</button>
    </div>
    </div>
 );
}