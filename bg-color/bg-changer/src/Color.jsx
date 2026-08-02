import {useState} from "react"
export default function Color(){
    let [color,setColor] = useState("white");
    return(
        
    <div style={{ backgroundColor: color, height: "100vh", margin: 0 }}>
      <button onClick={() => setColor("red")} className="m-8 bg-red-500 rounded-xl text-black p-2 border-black border-2">Red</button>
      <button onClick={() => setColor("green")}className="m-8 bg-green-500 rounded-xl text-black p-2 border-black border-2">green</button>
      <button onClick={() => setColor("blue")} className="m-8 bg-blue-500 rounded-xl text-black p-2 border-black border-2">blue</button>
      <button onClick={() => setColor("pink")} className="m-8 bg-pink-500 rounded-xl text-black p-2 border-black border-2">pink</button>
      <button onClick={() => setColor("yellow")} className="m-8 bg-yellow-500 rounded-xl text-black p-2 border-black border-2">yellow</button>
      <button onClick={() => setColor("purple")} className="m-8 bg-purple-500 rounded-xl text-black p-2 border-black border-2">purple</button>
      <button onClick={() => setColor("gray")} className="m-8 bg-gray-700 rounded-xl text-black p-2 border-black border-2 ">grey</button>
      <button onClick={() => setColor("white")} className="m-8 bg-white-500 rounded-xl text-black p-2 border-black border-2">white</button>
    </div>
    )
}