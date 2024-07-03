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
                    <hr className="solid"/>
                    <SideItem page={page} url={"/part"} name={"part"} title={"Liste pièces"} icon={"screw"}/>
                    <SideItem page={page} url={"/part/new"} name={"part-new"} title={"Nouvelle pièce"} icon={"add-tag"}/>
                    <hr className="solid"/>
                    <SideItem page={page} url={"/operation"} name={"operation"} title={"Liste opérations"} icon={"clipboard--v1"}/>
                    <SideItem page={page} url={"/operation/new"} name={"operation-new"} title={"Nouvel opérations"} icon={"add-to-clipboard--v1"}/>
                    <hr className="solid"/>
                    <SideItem page={page} url={""} name={"user"} title={"Liste agents"} icon={"user--v1"}/>
                    <SideItem page={page} url={""} name={"user-new"} title={"Nouvel agent"} icon={"add-user-male--v1"}/>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;
