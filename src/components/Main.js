import React from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main(props) {
    const user = React.useContext(CurrentUserContext);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__info-section">
                    <div className="profile__avatar">
                        <img className="profile__avatar-img" src={user.avatar} alt="Аватар профиля"/>
                        <div className="profile__avatar-button" onClick={props.onEditAvatar}></div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-edit">
                            <h1 className="profile__name">{user.name}</h1>
                            <button className="profile__edit" type="button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__description">{user.about}</p>
                    </div>
                </div>
                <button className="profile__add" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="gallery">
                {props.cards.map((card) => (
                    <Card
                        key={card._id}
                        onCardClick={props.onCardClick}
                        onCardLike={props.onCardLike}
                        onCardDelete={props.onCardDelete}
                        card={card}>
                    </Card>
                ))
                }
            </section>
        </main>
    )
}
export default Main;