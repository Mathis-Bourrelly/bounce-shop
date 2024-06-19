import React from "react"
import FullNavbar from "./component/FullNavbar";
import './login.css';
import Api from "../API";

const Login = () => {
    const api = new Api()


    const handleSubmit = async (e) => {
        e.preventDefault();
        document.getElementById("alert-password").style.display = "none"
        document.getElementById("alert-server").style.display = "none"
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const response = await api.login(email, password)
        console.log(response)
        if (response === "wrong_password"){
            document.getElementById("alert-password").style.display = "block"
        }else if(response === "server_error"){
            document.getElementById("alert-server").style.display = "block"
        }
        else {
            sessionStorage.setItem("token", response)
            await api.navigateTo("/part")
        }
    };
    return (
        <>
            <FullNavbar></FullNavbar>
            <div className="container">
                <div className="card">
                    <h2>Se connecter</h2>
                    <div className="card-alert" id="alert-password" style={{display:"none"}}>
                        Email ou mot de passe incorrect !
                    </div>
                    <div className="card-alert" id="alert-server" style={{display:"none"}}>
                        Erreur serveur, veuillez réessayer ultérieurement.
                    </div>
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
