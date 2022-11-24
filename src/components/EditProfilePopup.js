import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onUpdateUser, onClose, isLoading}) {

    const user = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('')
    const [about, setAbout] = React.useState('')

    React.useEffect(() => {
        setName(user.name);
        setAbout(user.about);
    }, [isOpen]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setAbout(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            about
        });
    }

    return (
        <PopupWithForm
            name="edit"
            title="Редактировать профиль"
            buttonName={isLoading ? 'Сохранение...' : 'Сохранить'}
            isOpen={isOpen}
            isLoading={isLoading}
            onSubmit={handleSubmit}
            onClose={onClose}>
            <input
                className="popup__input popup__input_type_name"
                onChange={handleNameChange}
                value={name || ''}
                name="profileName"
                required
                minLength="2"
                maxLength="40"
                id="name"
                placeholder="Имя"
            />
            <span className="popup__input-error popup__input-error_name"></span>
            <input
                className="popup__input popup__input_type_description"
                onChange={handleDescriptionChange}
                value={about || ''}
                name="profileDescription"
                required minLength="2"
                maxLength="200"
                id="description"
                placeholder="Описание"
            />
            <span className="popup__input-error popup__input-error_description"></span>
        </PopupWithForm>
    )
}
export default EditProfilePopup