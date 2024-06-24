import React from 'react';

const PricesParts = ({prices}) => {
    return (
        <table className="styled-table">
            <thead>
            <tr>
                <th>Date</th>
                <th>Prix</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {prices.map(price => (
                <tr key={price.id}>
                    <td>{price.date}</td>
                    <td><strong>{price.price}€</strong> /pièce</td>
                    <td>...</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default PricesParts;
