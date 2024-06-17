export default class Api {
    constructor() {
        this.baseUrl = "http://localhost:4000"
    }

    myFetch = (url, init) => {
        return new Promise(((resolve, reject) => {
            fetch(`${this.baseUrl}/${url}`, init)
                .then(response => {
                    if (response.status === 200) {
                        resolve(response.json())
                    } else {
                        reject(response.status)
                    }
                })
                .catch(err => reject(err))
        }))
    }

    login = (email, password) => {
        return this.myFetch('login', {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
    }

    getUtilisateurDataByMail = (mail, token) => {
        return this.myFetch(`utilisateurs/${mail}`, {
            method: "GET",
            headers: {
                'Authorization' : `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }

    getAllPieceWithRange = (offset, limit, token) => {
        return this.myFetch(`pieces/${offset}/${limit}`, {
            method: "GET",
            headers: {
                'Authorization' : `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
}