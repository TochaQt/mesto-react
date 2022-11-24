import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {

    const user = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === user._id;
    const isLiked = card.likes.some(i => i._id === user._id);
    const cardDeleteButtonClassName = (`${isOwn ? 'gallery__card-delete' : 'gallery__card-delete gallery__card-delete_disabled'}`);
    const cardLikeButtonClassName = (`gallery__card-like ${isLiked ? 'gallery__card-like_active' : ''}`);

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    return(
        <div className="gallery__card">
            <button className="gallery__card-img-button" type="button" onClick={handleClick}>
                <img className="gallery__card-img" src={card.link} alt={card.name}/>
            </button>
            <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} type="button"></button>
            <div className="gallery__card-info">
                <h2 className="gallery__card-title">{card.name}</h2>
                <div className="gallery__card-like-container">
                    <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
                    <p className="gallery__card-like-count">{card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}
export default Card