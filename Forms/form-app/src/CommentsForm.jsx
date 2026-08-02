import {useState} from "react"
export default function CommetsForm(addNewComment){
    let [formData, setFormData] = useState({
        username:"",
        remarks:"",
        rating:5
    });

    let handleInputChange = (event) =>{
        setFormData((currData) => {
            return {...currData , [event.target.name]:event.target.value}
        });
    };

    let handleSubmit = (event) =>{
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            username:"",
        remarks:"",
        rating:5
    });
    }

    return(<div>
        <h2> Give a Comment</h2>
       <form onSubmit={handleSubmit}>


        <label htmlFor="username"> UserName</label>
        <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} name="username" id="username"/>

        <br></br><br></br>

        <label htmlFor="remark">Give Remark</label>
        <textarea value={formData.remarks} placeholder="add remarks" onChange={handleInputChange} name="remarks" id="remark">remarks</textarea>


        <br></br><br></br>

        <label htmlFor="rating"> Rating</label>
        <input placeholder="rating" type="number" min={1} max={5} value={formData.rating} onChange={handleInputChange} name="rating" id="rating"/>


        <br></br><br></br>
        <button>Add Comment</button>
       </form>
    </div>
    );
}