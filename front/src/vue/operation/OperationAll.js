import React from "react"
import SideMenu from "../component/SideMenu";
import Navbar from "../component/Navbar";
import OperationList from "./component/OperationList";

const OperationAll = () => {
    const pageName = "operation"
    const pageTitle = "Opérations"
    return (
        <>
            <SideMenu page={pageName}/>
            <div className="main-content">
                <Navbar page={pageTitle}/>
                <div className="content">
                    <OperationList/>
                </div>
            </div>
        </>
    );
};

export default OperationAll
