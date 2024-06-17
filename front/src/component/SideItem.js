import React from "react";
import "./css/sideItem.css"

const SideItem = ({page, name, title, icon}) => {


    const backgroundColor = name === page ? '#F7F7F7' : '#FFFFFF';
    const iconColor = name === page ? 'CA0610' : '000000';

    return (
        <div>

            <div className="side-item-container" style={{backgroundColor}}>
                <img className="side-item-image" width="30" src={`https://img.icons8.com/fluency-systems-regular/48/${iconColor}/${icon}.png`} alt="screw"/>
                <div className="side-item-title">{title}</div>
            </div>
        </div>
    );
}

export default SideItem;
