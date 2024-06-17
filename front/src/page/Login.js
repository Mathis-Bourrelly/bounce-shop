import React, {useState} from "react"
import FullNavbar from "../component/FullNavbar";
import './css/login.css';
import Api from "../API";

const Login = () => {
const api = new Api()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const token = await api.login(email, password)
        localStorage.setItem("token", token)
    };
    return (
        <>
            <FullNavbar></FullNavbar>
            <div className="container">
                <div className="card">
                    <h2>Se connecter</h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required autoComplete="email"/>
                        <label htmlFor="password">Mot de passe:</label>
                        <input type="password" id="password" name="password" required autoComplete="current-password"/>
                        <div className="form-group">
                            <a href="#" className="forgot-password">Mot de passe oublié ?</a>
                            <button type="submit" className="btn-color">Se connecter</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login
