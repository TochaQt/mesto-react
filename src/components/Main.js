import React from "react";
import {api} from "../utils/Api";
import Card from "./Card";

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] =React.useState([]);

    React.useEffect(() => {
        Promise.all([api.setProfileInfo(), api.getInitialCards()])
            .then((data) => {
                setUserName(data[0].name)
                setUserDescription(data[0].about)
                setUserAvatar(data[0].avatar)
                return data
            })
            .then((data) => {
                setCards(data[1])
                return cards
            })
    },[])

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__info-section">
                    <div className="profile__avatar">
                        <img className="profile__avatar-img" src={userAvatar} alt="Аватар профиля"/>
                        <div className="profile__avatar-button" onClick={props.onEditAvatar}></div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-edit">
                            <h1 className="profile__name">{userName}</h1>
                            <button className="profile__edit" type="button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__description">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="gallery">
                {cards.map((card) => (
                    <Card key={card._id} onCardClick={props.onCardClick} card={card}>
                        <button className="gallery__card-img-button" type="button">
                            <img className="gallery__card-img" src={card.link} alt={card.name}/>
                        </button>
                        <button className="gallery__card-delete" type="button"></button>
                        <div className="gallery__card-info">
                            <h2 className="gallery__card-title">{card.name}</h2>
                            <div className="gallery__card-like-container">
                                <button className="gallery__card-like" type="button"></button>
                                <p className="gallery__card-like-count">{card.likes.length}</p>
                            </div>
                        </div>
                    </Card>
                ))
                }
            </section>
        </main>
    )
}

export default Main;