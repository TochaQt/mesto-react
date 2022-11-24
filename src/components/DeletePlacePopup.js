import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeletePlacePopup({isOpen, onDeleteCard, onClose, isLoading, card}) {

    function handleSubmit(e) {
        e.preventDefault();

        onDeleteCard(card)
    }

    return (
        <PopupWithForm name="delete"
                       title="Вы уверены?"
                       buttonName={isLoading ? 'Удаление...' : 'Да'}
                       isOpen={isOpen}
                       isLoading={isLoading}
                       onClose={onClose}
                       onSubmit={handleSubmit}
        />
    )
}
export default DeletePlacePopup;