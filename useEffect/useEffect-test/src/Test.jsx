import {useState,useEffect} from "react";
export default function Test(){
    let [count , setCount ] = useState(0);

    let incCount = ()=>{
        setCount(prevCount =>prevCount+1);
    }
    useEffect(function hello(){
        alert("you used useeffect");
    },[]);
    return(
        <div>
            <p>Count = {count}</p>
            <button onClick={incCount}>click me!</button>
        </div>
    )
}