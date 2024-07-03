import React, { useState } from 'react';
import SelectSearch from 'react-select-search';
import './css/partForm.css';
import '../../App.css';
import Api from "../../../API";
import '../../search.css';

const PartFormSelectOperation = ({ token, onSelectedOperationsChange}) => {
    const [operationSearchResults, setOperationSearchResults] = useState([]);
    const [opeLastSearch, setOpeLastSearch] = useState([]);
    const [selectedOperations, setSelectedOperations] = useState([]);
    const api = new Api();

    const fetchOperationSearchResults = async (query) => {
        if (query.length > 0) {
            const results = await api.getFromRoute(`operations/search?term=${query}`, token);
            setOpeLastSearch(results)
            return results.map(operation => ({
                name: operation.label,
                value: operation.operationID,
            }));
        }
        return [];
    };

    const handleAddOperation = (selectedID) => {
        const selectedOperation = opeLastSearch.find(operation => operation.operationID === selectedID);
        setSelectedOperations(prevSelectedOperations => {
            const newSelectedOperations = [...prevSelectedOperations, selectedOperation];
            onSelectedOperationsChange(newSelectedOperations);
            return newSelectedOperations;
        });
    };


    return (
        <div className="card">
            <label className="title-label">Opération</label>
            <div className="form-group">
                <SelectSearch
                    options={operationSearchResults}
                    getOptions={fetchOperationSearchResults}
                    search
                    placeholder="Rechercher une opération par nom..."
                    onChange={handleAddOperation}
                />
                <button type="button" className="btn-color">Nouvelle opération</button>
            </div>
            <table className="styled-table">
                <thead>
                <tr>
                    <th>Nom</th>
                </tr>
                </thead>
                <tbody>
                {selectedOperations.map(operation => (
                    <tr key={operation.operationID}>
                        <td>{operation.label}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PartFormSelectOperation;
