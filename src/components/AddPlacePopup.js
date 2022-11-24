import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onAddCard, onClose, isLoading}) {

    const nameRef = React.useRef();
    const linkRef = React.useRef();

    React.useEffect(() => {
        nameRef.current.value =  '';
        linkRef.current.value = '';
    }, [isOpen])

    function handleSubmit(e) {
        e.preventDefault();

        onAddCard({
            name: nameRef.current.value,
            link: linkRef.current.value
        });
    }

    return (
        <PopupWithForm
            name="add"
            title="Новое место"
            buttonName={isLoading ? 'Сохранение...' : 'Создать'}
            isLoading={isLoading}
            onSubmit={handleSubmit}
            isOpen={isOpen}
            onClose={onClose}
        >
            <input
                className="popup__input popup__input_type_place"
                name="cardName"
                ref={nameRef}
                required
                minLength="2"
                maxLength="30"
                id="card-name"
                placeholder="Название"
            />
            <span className="popup__input-error popup__input-error_card-name"></span>
            <input
                className="popup__input popup__input_type_img"
                name="cardImg"
                ref={linkRef}
                required
                type="url"
                id="card-img"
                placeholder="Ссылка на картинку"
            />
            <span className="popup__input-error popup__input-error_card-img"></span>
        </PopupWithForm>
    )
}
export default AddPlacePopup;