import React from "react";
import "./css/partList.css"
const PartListItem = ({part}) => {
    return (
        <tr key={part.partID}>
            <td>{part.partID}</td>
            <td>{part.label}</td>
            <td><span className="range-badge">{part.rangeID}</span></td>
            <td>
                {part.isBought && <span className="type-badge bought">Acheté</span>}
                {part.isDeliverable && <span className="type-badge deliverable">Déliverable</span>}
                {part.isRaw && <span className="type-badge raw">Matériaux</span>}
                {part.isIntermediate && <span className="type-badge intermediate">Intermédiaire</span>}
            </td>
            <td>{part.quantity}</td>
            <td>{part.priceID}</td>
            <td>...</td>
        </tr>
    );
}

export default PartListItem;
