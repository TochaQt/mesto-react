function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return(
        <div className="gallery__card" onClick={handleClick}>
            {props.children}
        </div>
    )
}

export default Card