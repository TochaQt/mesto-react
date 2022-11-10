class Api {
    constructor(options) {
        this._url = options.baseUrl
        this._headers = options.headers
    }

    _getResponseData(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._headers.authorization
            }
        })
            .then(res =>
                this._getResponseData(res)
            )
    }

    editProfile(formData) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.contentType
            },
            body: JSON.stringify({
                name: formData.profileName,
                about: formData.profileDescription
            })
        })
            .then(res =>
                this._getResponseData(res)
            )
    }

    editAvatar(formData) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.contentType
            },
            body: JSON.stringify({
                avatar: formData.profileAvatar
            })
        })
            .then(res =>
                this._getResponseData(res)
            )
    }

    addCard(formData) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': this._headers.contentType
            },
            body: JSON.stringify({
                name: formData.cardName,
                link: formData.cardImg
            })
        })
            .then(res =>
                this._getResponseData(res)
            )
    }

    setProfileInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._headers.authorization
            }
        })
            .then(res =>
                this._getResponseData(res)
            )
    }

    setLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._headers.authorization,
            }
        })
            .then(res =>
                this._getResponseData(res)
            )
    }

    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._headers.authorization
            }
        })
            .then(res =>
                this._getResponseData(res)
            )
    }

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._headers.authorization
            }
        })
            .then(res =>
                this._getResponseData(res)
            )
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52',
    headers: {
        authorization: '82879a9e-586e-451f-92c6-8eee7fcdfc51',
        contentType: 'application/json'
    }
});