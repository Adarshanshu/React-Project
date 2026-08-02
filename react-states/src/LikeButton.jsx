import { useState } from "react";
export default function LikeButton(){
    let [isClicked, setIsClicked] = useState(false);

    let clicked = () =>{
        setIsClicked(!isClicked);
    };
    let likeStyle = { color : "red"};
    return(
        <div>
        <p onClick={clicked}>
            {isClicked ? (<i className="fa-regular fa-heart"></i>) : (<i className="fa-solid fa-heart" style={likeStyle}></i>)}
        </p>
        </div>
    );
}