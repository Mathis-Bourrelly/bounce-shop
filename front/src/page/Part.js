import React from "react"
import SideMenu from "../component/SideMenu";
import Navbar from "../component/Navbar";

const Part = () => {
    const pageName = "part"
    return (
        <>
            <SideMenu page={pageName}/>
            <div className="main-content">
                <Navbar page={pageName}/>
                <div className="content">
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusamus ad beatae blanditiis dolore doloremque eos
                        eveniet exercitationem ipsa molestiae molestias,
                        officia perspiciatis porro
                        quod quos reiciendis sapiente sed suscipit voluptate!
                    </div>
                </div>
            </div>
        </>
    );
};

export default Part
