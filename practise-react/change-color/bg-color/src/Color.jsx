import {useState} from "react";
import './Color.css'
export default function Color(){
    let [count,setCount] = useState(0);
    let incCount = function(){
        setCount(count+1);
    }
    let decreaseCount = function(){
        setCount(count-1);
    }
    let reset = function(){
        setCount(0);
    }
    return (
        <div>
            <h3 >Count = {count}</h3>
            <button onClick={incCount} className="increase">increase !</button>
            <button onClick={decreaseCount} className="decrease">decrease !</button>
            <button onClick={reset} className="reset">reset !</button>
        </div>

    );
}