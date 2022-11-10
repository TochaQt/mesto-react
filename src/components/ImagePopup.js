function ImagePopup(props) {
    return(
        <section className={`popup popup_img ${props.card ? 'popup_opened' : ""}`}>
            <div className="popup__container">
                <img className="popup__pic" src={props.card && props.card.link} alt=""/>
                <p className="popup__pic-name">{props.card && props.card.name}</p>
                <button className="popup__close" type="button" onClick={props.onClose}></button>
            </div>
        </section>
    )
}

export default ImagePopup;