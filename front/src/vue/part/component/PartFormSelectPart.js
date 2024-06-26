import React, { useState } from 'react';
import SelectSearch from 'react-select-search';
import './css/partForm.css';
import '../../App.css';
import Api from "../../../API";
import '../../search.css';

const PartFormSelectPart = ({ token, onSelectedPartsChange}) => {
    const [searchResults, setSearchResults] = useState([]);
    const [lastSearch, setLastSearch] = useState([]);
    const [selectedParts, setSelectedParts] = useState([]);
    const api = new Api();

    const fetchSearchResults = async (query) => {
        if (query.length > 0) {
            const results = await api.getFromRoute(`parts/search?term=${query}`, token);
            setLastSearch(results)
            return results.map(part => ({
                name: part.label,
                value: part.partID,
            }));
        }
        return [];
    };

    const handleAddPart = (selectedID) => {
        console.log(lastSearch)
        const selectedPart = lastSearch.find(part => part.partID === selectedID);
        console.log("selectedPart",selectedPart)
        setSelectedParts([...selectedParts, { ...selectedPart, quantity: 1 }]);
        onSelectedPartsChange(selectedPart); // Appel du callback pour mettre à jour le parent
    };

    const handleQuantityChange = (index, newQuantity) => {
        const updatedParts = [...selectedParts];
        updatedParts[index].quantity = newQuantity;
        setSelectedParts(updatedParts);
        onSelectedPartsChange(updatedParts); // Appel du callback pour mettre à jour le parent
    };

    return (
        <div className="card">
            <label className="title-label">Composition</label>
            <div className="form-group">
                <SelectSearch
                    options={searchResults}
                    getOptions={fetchSearchResults}
                    search
                    placeholder="Rechercher une pièce par nom..."
                    onChange={handleAddPart}
                />
            </div>
            <table className="styled-table">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Quantité</th>
                </tr>
                </thead>
                <tbody>
                {selectedParts.map((part, index) => (
                    <tr key={part.partID}>
                        <td>{part.label}</td>
                        <td>
                            <input
                                className="input-count"
                                type="number"
                                value={part.quantity}
                                onChange={(e) => handleQuantityChange(index, e.target.value)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PartFormSelectPart;
