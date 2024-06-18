export default class Api {
    constructor() {
        this.baseUrl = "http://localhost:4000"
    }

    myFetch = (url, init) => {
        return new Promise(((resolve, reject) => {
            fetch(`${this.baseUrl}/${url}`, init)
                .then(response => {
                    const regex = /^2/;
                    if (regex.test(response.status)) {
                        resolve(response.json())
                    } else {
                        reject(response.status)
                    }
                })
                .catch(err => reject(-1))
        }))
    }

    login = async (email, password) => {
        let response
        try {
            response = await this.myFetch('login', {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            response = response.token
        } catch (e) {
            console.log(e)
            if (e === 401) {
                response = "wrong_password"
                console.log(response)
            } else {
                response = "server_error"
            }
        }
        return response

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