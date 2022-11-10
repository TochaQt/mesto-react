import React from "react";

function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    }

    return(
        <div className="gallery__card">
            <button className="gallery__card-img-button" type="button" onClick={handleClick}>
                <img className="gallery__card-img" src={card.link} alt={card.name}/>
            </button>
            <button className="gallery__card-delete" type="button"></button>
            <div className="gallery__card-info">
                <h2 className="gallery__card-title">{card.name}</h2>
                <div className="gallery__card-like-container">
                    <button className="gallery__card-like" type="button"></button>
                    <p className="gallery__card-like-count">{card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card