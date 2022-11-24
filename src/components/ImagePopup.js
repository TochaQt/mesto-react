function ImagePopup({card, onClose}) {
    return(
        <section className={`popup popup_img ${card ? 'popup_opened' : ""}`}>
            <div className="popup__container">
                <img className="popup__pic" src={card?.link} alt={card?.name}/>
                <p className="popup__pic-name">{card?.name}</p>
                <button className="popup__close" type="button" onClick={onClose}></button>
            </div>
        </section>
    )
}
export default ImagePopup;