import React from 'react';

const PreviousParts = ({parts}) => {
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
                <tr key={part.partID}>
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
