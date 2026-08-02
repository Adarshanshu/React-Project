import {useState} from "react";
let randomColor = ()=>{
        let color1 = Math.floor(Math.random()*255);
        let color2 = Math.floor(Math.random()*255);
        let color3 = Math.floor(Math.random()*255);
        return `rgb(${color1}, ${color2}, ${color3})`;
    }
export default function Bg(){
    let [color ,setColor] = useState(randomColor());
    let changeColor =()=>{
        setColor(randomColor());
    }
    return(
        <div style={{backgroundColor:color , height: "100vh", margin: 0}}>
        <h1>click on the button to change color</h1>
        <button onClick={changeColor}>change Color !</button>
        </div>
    )
}