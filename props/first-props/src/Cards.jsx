import "./Cards.css";

export default function Cards(props) {
    return (
        <div className="cards">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            {props.img ? (
                <img src={props.img} alt={props.title} className="image" />
            ) : (
                <div className="image-placeholder">No image</div>
            )}
        </div>
    );
}