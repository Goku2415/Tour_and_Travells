import { useState } from "react";


function Card({ id, image, name, info, price, removeTour }) {

    //  these all the parameters we have given to the card is what we will target usimg the props that will render at the UI.

    const [readmore, setReadmore] = useState(false);

    const description = readmore ? info:`${info.substring(0, 200)}....`
    
    
    // this info.substring truncate the wordcount as much we want and we have given the no of word count we have to cut out off it and also given initial and final index

    function readmoreHandler() {
        setReadmore(!readmore);
    }
    //this readmoreHandler function is a function to create a toggel property for the readmore props, such that if the readmore is true than it will convert it into false and if the readmore is false it convert it into false



    return (
        <div className="card">

            <img src={image} className="image"/>

            <div className="tour-info">

                <diV className="tour-details">

                    <h4 className="tour-price">{price}</h4>

                    <h4 className="tour-name">{name}</h4>
                </diV>

                <div className="description">
                    {description}

                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? "show less" : "read more "}
                    </span>

                </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Intrested
            </button>

        </div>
    );
};


export default Card;