import {useState} from "react";
import "./Comment.css"
export default function Comment(){
    let[comments, setComments] = useState([{
        username:"@ad",
        remarks:"greatjob!",
        rating:4
    }]);

    let addNewComments=(comment)=>{
        setComments((currComments)=>[...currComments,comment])
    }
    return(
        <>
        <div>
            <h3>All Comments</h3>
       
            <div className="comment">
                <span>comments[0].remarks</span>
                &nbsp;
                <span>(rating={comments[0].rating})</span>
                <p>={comments[0].username}</p>
            </div>
        </div>
        <hr></hr>
        <CommentsForm addNewComment={addNewComment}/>
        </>
    );
}