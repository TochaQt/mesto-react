import React, {useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    function handleEditAvatarClick () {
        setEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleEditPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard(null)
    }

  return (
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleEditPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm name="edit" title="Редактировать профиль" buttonName="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input className="popup__input popup__input_type_name" name="profileName" required minLength="2" maxLength="40" id="name" placeholder="Имя"/>
          <span className="popup__input-error popup__input-error_name"></span>
          <input className="popup__input popup__input_type_description" name="profileDescription" required minLength="2" maxLength="200" id="description" placeholder="Описание"/>
          <span className="popup__input-error popup__input-error_description"></span>
        </PopupWithForm>
        <PopupWithForm name="avatar" title="Обновить аватар" buttonName="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input className="popup__input popup__input_type_avatar" name="profileAvatar" required type="url" id="avatar" placeholder="Ссылка на картинку"/>
          <span className="popup__input-error popup__input-error_avatar"></span>
        </PopupWithForm>
        <PopupWithForm name="add" title="Новое место" buttonName="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input className="popup__input popup__input_type_place" name="cardName" required minLength="2" maxLength="30" id="card-name" placeholder="Название"/>
          <span className="popup__input-error popup__input-error_card-name"></span>
          <input className="popup__input popup__input_type_img" name="cardImg" required type="url" id="card-img" placeholder="Ссылка на картинку"/>
          <span className="popup__input-error popup__input-error_card-img"></span>
        </PopupWithForm>
        <PopupWithForm name="delete" title="Вы уверены?" buttonName="Да" />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
  );
}

export default App;
