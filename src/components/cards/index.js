import React from "react";


function Cards(props) {
    return(
        <div className="cards">
            <img src={props.img}></img>
        </div>
    )
}

export default Cards;