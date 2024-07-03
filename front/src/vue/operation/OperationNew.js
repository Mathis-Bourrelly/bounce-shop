import React from "react"
import SideMenu from "../component/SideMenu";
import Navbar from "../component/Navbar";
import OperationForm from "./component/OperationForm";

const OperationNew = () => {
    const pageName = "operation-new"
    const pageTitle = "Nouvelle opération"
    return (
        <>
            <SideMenu page={pageName}/>
            <div className="main-content">
                <Navbar page={pageTitle}/>
                <div className="content">
                    <OperationForm/>
                </div>
            </div>
        </>
    );
};

export default OperationNew
