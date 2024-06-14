import React from "react";
import "./navbar.css"
const Navbar = () => {

    return (
        <div className="navbar">
            <div>User</div>
            <div>
                <button>Account</button>
                <button>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;
