function doSomething(){
    return(
        <div>
            {console.log("button was clicked")}
        </div>
    );
}
function massage(){
    return(
        <div>
            {console.log("chal be !!!!")}
        </div>
    );
}
export default function Button(){
    return(
        <div>
            <button onClick={doSomething}>click me </button>
            <p onMouseOver={massage}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis doloremque sequi magnam officia, nihil dignissimos ratione debitis nulla et mollitia, ut quae labore, odit tempore fugit! Ad, harum voluptas.
            Ex dolorem repellat, recusandae, eius laboriosam reprehenderit animi, maxime dolor harum adipisci at placeat amet expedita ratione doloribus dolore? Possimus praesentium nostrum nobis fugiat ut est quas necessitatibus accusantium quae!
            Molestiae rem unde labore nam ut quisquam at incidunt odit fugit! Dolorum facere consequuntur odit quasi consectetur. Error voluptatibus dolorem odio voluptatum ipsam fugiat? Nisi magnam molestias reprehenderit culpa fugit?
            Iure, reprehenderit voluptas! Itaque magnam, ratione maiores assumenda sunt tempora aut cumque mollitia perspiciatis ipsa eveniet voluptatibus recusandae, dolor omnis reiciendis blanditiis quibusdam! Voluptatum totam eos numquam beatae? Consequuntur, vel.
            Eveniet iusto nobis voluptatibus aliquam facilis at debitis quam esse odit quas ea amet, animi minus obcaecati quo asperiores corporis minima, saepe consectetur architecto pariatur itaque. Dolores magnam quam accusamus!</p>
        </div>
    );
}