import React from 'react';

const PreviousParts = ({parts, api}) => {

    return (
        <table className="styled-table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Quantité</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {parts.map(part => (
                <tr key={part.partID} className="clickable-row" onClick={() => api.navigateTo(`/part/${part.partID}`)}>
                    <td>{part.partID}</td>
                    <td>{part.prevLabel}</td>
                    <td>{part.quantity}</td>
                    <td>...</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default PreviousParts;
