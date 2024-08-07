import React from "react"
import SideMenu from "../component/SideMenu";
import Navbar from "../component/Navbar";
import PartForm from "./component/PartForm";

const PartNew = () => {
    const pageName = "part-new"
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

export default PartNew
