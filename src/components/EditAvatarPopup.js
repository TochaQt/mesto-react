import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup({isOpen, onUpdateAvatar, onClose, isLoading}) {

    const avatarRef = React.useRef()

    React.useEffect(() => {
        avatarRef.current.value =  ''
    }, [isOpen])

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            buttonName={isLoading ? 'Сохранение...' : 'Сохранить'}
            isOpen={isOpen}
            isLoading={isLoading}
            onSubmit={handleSubmit}
            onClose={onClose}>
            <input
                className="popup__input popup__input_type_avatar"
                name="profileAvatar"
                ref={avatarRef}
                required
                type="url"
                id="avatar"
                placeholder="Ссылка на картинку"
            />
            <span className="popup__input-error popup__input-error_avatar"></span>
        </PopupWithForm>
    )
}
export default EditAvatarPopup