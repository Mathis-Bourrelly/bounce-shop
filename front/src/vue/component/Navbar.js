import React from "react";
import "./css/navbar.css"
const Navbar = ({page}) => {

    return (
        <nav className="navbar">
            <div className="nav-title">{page}</div>
            <div className="nav-btn-container">
                <button className="btn-light">Account</button>
                <button className="btn-dark">Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;
