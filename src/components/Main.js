import React, {useState, useEffect} from "react";
import {api} from "../utils/Api";
import Card from "./Card";

function Main(props) {

    const [userName, setUserName] = useState(null);
    const [userDescription, setUserDescription] = useState(null);
    const [userAvatar, setUserAvatar] = useState(null);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.setProfileInfo(), api.getInitialCards()])
            .then(([user, cards]) => {
                setUserName(user.name)
                setUserDescription(user.about)
                setUserAvatar(user.avatar)
                return cards
            })
            .then((cards) => {
                setCards(cards)
            })
            .catch((err) => {
                console.log(err)
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

                    </Card>
                ))
                }
            </section>
        </main>
    )
}

export default Main;