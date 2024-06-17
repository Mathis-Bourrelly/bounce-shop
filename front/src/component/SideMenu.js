import React from "react";
import "./css/sideMenu.css";
import SideItem from "./SideItem";

const SideMenu = ({page}) => {
    return (
        <div className="side-menu">
            <div className="side-logo-container">
                <img height="40px" src="/logo512.svg" alt="brand_logo"/>
                <div className="side-title">Bounce Shop</div>
            </div>
            <div className="side-content">
                <div className="side-sub-title">
                    Menu Administrateur
                </div>
                <div className="side-nav">
                    <SideItem page={page} name={"part"} title={"pièces"} icon={"screw"}/>
                    <SideItem page={page} name={"user"} title={"utlisateurs"} icon={"user--v1"}/>
                    <SideItem page={page} name={"command"} title={"commandes"} icon={"user--v1"}/>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;
