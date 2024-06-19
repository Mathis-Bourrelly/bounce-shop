import React from "react"
import SideMenu from "../component/SideMenu";
import Navbar from "../component/Navbar";
import PartForm from "./component/PartForm";

const PartAll = () => {
    const pageName = "part"
    const pageTitle = "Nouvelle pièce"
    return (
        <>
            <SideMenu page={pageName}/>
            <div className="main-content">
                <Navbar page={pageTitle}/>
                <div className="content">
                    <PartForm/>
                </div>
            </div>
        </>
    );
};

export default PartAll
