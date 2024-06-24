import {useNavigate} from "react-router-dom";

export default class Api {

    constructor() {
        this.baseUrl = "http://localhost:4000"
        // eslint-disable-next-line react-hooks/rules-of-hooks
        this.navigate = useNavigate()
    }

    async navigateTo(route) {
        let result = await this.verify(sessionStorage.getItem("token"))
        console.log(result)
        if (await this.verify(sessionStorage.getItem("token")) === 202) {
            this.navigate(route)
        } else {
            sessionStorage.setItem("token", "")
            this.navigate("/")
        }
    }
    myFetch = (url, init) => {
        return new Promise((resolve, reject) => {
            fetch(`${this.baseUrl}/${url}`, init)
                .then(response => {
                    if (response.ok) {
                        return response.json().then(data => resolve(data));
                    } else {
                        console.log(`${response.status} : ${response.statusText}`);
                        reject(new Error(`HTTP error ${response.status}: ${response.statusText}`));
                    }
                })
                .catch(err => {
                    console.error('Fetch error:', err);
                    reject(err);
                });
        });
    }

    myFetchNoJson = (url, init) => {
        return new Promise(((resolve, reject) => {
            fetch(`${this.baseUrl}/${url}`, init)
                .then(response => {
                    const regex = /^2/;
                    if (regex.test(response.status)) {
                        resolve(response)
                    } else {
                        reject(response.status)
                    }
                })
                .catch(err => reject(-1))
        }))
    }

    postFromRoute = async (url, body, token) => {
        console.log("Sent body:", body);
        try {
            const response = await this.myFetch(url, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            return response;
        } catch (error) {
            console.error('Error in postFromRoute:', error);
            throw error; // Rethrow the error to be handled by the caller
        }
    }

    getFromRoute = async (url, token) => {
        try {
            const response = await this.myFetch(url, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            return response;
        } catch (error) {
            console.error('Error in getFromRoute:', error);
            throw error; // Rethrow the error to be handled by the caller
        }
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

    verify = async (token) => {
        let response
        try {
            response = await this.myFetchNoJson('auth', {
                method: "POST",
                body: JSON.stringify({
                    token: token,
                }),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            response = response.status
        } catch (e) {
            console.log(e)
            if (e === 401) {
                response = e
                console.log(response)
            }
        }
        return response
    }
}