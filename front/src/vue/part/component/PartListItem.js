import React from "react";
import "./css/partList.css"

const PartListItem = ({part, api}) => {
    const handleClick = async () => {
        await api.navigateTo(`/part/${part.partID}`);
    };
    return (
        <tr className="clickable-row" onClick={handleClick}>
            <td>{part.partID}</td>
            <td>{part.label}</td>
            <td><span className="range-badge">{part.rangeID}</span></td>
            <td>{part.suppliername}</td>
            <td>
                {part.type === "B" && <span className="type-badge bought">Acheté</span>}
                {part.type === "D" && <span className="type-badge deliverable">Déliverable</span>}
                {part.type === "R" && <span className="type-badge raw">Matériaux</span>}
                {part.type === "I" && <span className="type-badge intermediate">Intermédiaire</span>}
            </td>
            <td>{part.quantity}</td>
            <td><strong>{part.price}</strong> €</td>
            <td>...</td>
        </tr>
    );
}

export default PartListItem;
