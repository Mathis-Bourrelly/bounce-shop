import React from "react"
import SideMenu from "../component/SideMenu";
import Navbar from "../component/Navbar";
import PartList from "./component/PartList";

const PartAll = () => {
    const pageName = "part"
    const pageTitle = "Pièces"
    return (
        <>
            <SideMenu page={pageName}/>
            <div className="main-content">
                <Navbar page={pageTitle}/>
                <div className="content">
                    <PartList/>
                </div>
            </div>
        </>
    );
};

export default PartAll
