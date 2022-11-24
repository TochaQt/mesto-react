import React, {useState, useEffect} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import {api} from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeletePlacePopup from "./DeletePlacePopup";

function App() {

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isDeletePlacePopupOpen, setDeletePlacePopupOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cardToDelete, setCardToDelete] = useState({})

    useEffect(() => {

        Promise.all([api.setProfileInfo(), api.getInitialCards()])
            .then(([user, cards]) =>{
                setCurrentUser(user)
                return cards
            })
            .then((cards) => {
                setCards(cards)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

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
        setDeletePlacePopupOpen(false)
        setSelectedCard(null)
    }

    function handleUpdateUser(data) {

        setLoading(true);

        api.editProfile(data)
            .then((data) => {
                setCurrentUser(data);
            })
            .then(() => {
                closeAllPopups();
            })
            .then(() => {
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleUpdateAvatar(data) {

        setLoading(true);

        api.editAvatar(data)
            .then((data) => {
                setCurrentUser(data);
            })
            .then(() => {
                closeAllPopups();
            })
            .then(() => {
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        if (!isLiked) {
            api.setLike(card._id)
                .then((data) => {
                    setCards((state) => state.map((c) => c._id === card._id ? data : c));
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        else {
            api.deleteLike(card._id)
                .then((data) => {
                    setCards((state) => state.map((c) => c._id === card._id ? data : c));
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    function handleCardDelete(card) {

        setDeletePlacePopupOpen(true)

        setCardToDelete(card)
    }

    function handleAddCard(data) {

        setLoading(true);

        api.addCard(data)
            .then((data) => {
                setCards([data, ...cards])
            })
            .then(() => {
                closeAllPopups();
            })
            .then(() => {
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleDeleteCard(card) {

        setLoading(true);

        api.deleteCard(card._id)
            .then((data) => {
            setCards((data) => data.filter((c) => c._id !== card._id));
        })
            .then(() => {
                closeAllPopups();
            })
            .then(() => {
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
        })
    }

  return (
      <CurrentUserContext.Provider value={currentUser}>
          <div className="page">
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleEditPlaceClick} onEditAvatar={handleEditAvatarClick}
                  onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
            <Footer />
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} isLoading={loading} />
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} isLoading={loading} />
            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddCard} isLoading={loading} />
            <DeletePlacePopup isOpen={isDeletePlacePopupOpen} onClose={closeAllPopups} onDeleteCard={handleDeleteCard} isLoading={loading} card={cardToDelete} />
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          </div>
      </CurrentUserContext.Provider>
  );
}
export default App;
