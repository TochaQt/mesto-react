function PopupWithForm(props) {
    return(
        <section className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ""}`}>
            <div className="popup__container">
                <form className={`popup__form popup__form_${props.name}`} name={props.name} noValidate>
                    <h3 className="popup__title">{props.title}</h3>
                    <div className="popup__input-place">
                        {props.children}
                    </div>
                    <button className={`popup__save popup__save_${props.name}`} type="submit">{props.buttonName}</button>
                    <button className="popup__close" type="button" onClick={props.onClose}></button>
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm;