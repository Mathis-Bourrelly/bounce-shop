import React, { useEffect, useState } from 'react';
import "./css/operationList.css";
import OperationListItem from './OperationListItem';
import Pagination from "../../component/Pagination";
import Api from "../../../API";

const OperationList = () => {
    const [operations, setOperations] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: 'operationID', direction: 'asc' });
    const [searchText, setSearchText] = useState('');
    const [searchColumn, setSearchColumn] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemPerPage = 12;
    const api = new Api();

    useEffect(() => {
        fetchOperations();
    }, [sortConfig, searchText, searchColumn, currentPage]);

    const fetchOperations = async () => {
        const token = sessionStorage.getItem("token");

        try {
            let url = `operations/getByQuery/${sortConfig.direction}/${sortConfig.key}/${currentPage}?searchColumn=${searchColumn}&searchText=${searchText}`;
            const data = await api.getFromRoute(url, token);
            setOperations(data.operations);
            setTotalPages(Math.ceil(data.count / itemPerPage));
        } catch (error) {
            console.log('Error fetching data:', error);
            if (error) {
                api.navigate("/");
            }
        }
    };

    const getSortIcon = (key) => {
        if (sortConfig.key !== key) {
            return <img width="16" height="16" src="https://img.icons8.com/fluency-systems-regular/48/sort.png" alt="sort" />;
        }
        if (sortConfig.direction === 'asc') {
            return <img width="16" height="16" src="https://img.icons8.com/fluency-systems-regular/48/sort-amount-up.png" alt="sort-amount-up" />;
        }
        return <img width="16" height="16" src="https://img.icons8.com/fluency-systems-regular/48/generic-sorting.png" alt="generic-sorting" />;
    };

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
        setCurrentPage(1);
    };

    const handleSearchColumnChange = (e) => {
        setSearchColumn(e.target.value === "no_filter" ? "" : e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="table-container">
            <div className="table-top-bar">
                <div className="part-research">
                    <input id="searchField" type="text" onChange={handleSearchTextChange} placeholder="🔎recherche" />
                    <select name="column" id="column-select" value={searchColumn} onChange={handleSearchColumnChange}>
                        <option value="no_filter">Aucun filtre</option>
                        {/*<option value="operationID">ID</option>*/}
                        <option value="label">Nom</option>
                        {/*<option value="rangeID">Gamme</option>
                        <option value="workStationID">Poste de travail</option>
                        <option value="machineID">Machine</option>
                        <option value="workTime">Temps de travail</option>*/}
                    </select>
                </div>
                <button className="btn-color" onClick={() => api.navigateTo("/operation/new")}>Créer une opération</button>
            </div>
            <table className="styled-table">
                <thead>
                <tr>
                    <th><a className="sortable-column" onClick={() => requestSort('operationID')}>ID{getSortIcon('operationID')}</a></th>
                    <th><a className="sortable-column" onClick={() => requestSort('label')}>Nom{getSortIcon('label')}</a></th>
                    <th><a className="sortable-column" onClick={() => requestSort('rangeID')}>Gamme{getSortIcon('rangeID')}</a></th>
                    <th><a className="sortable-column" onClick={() => requestSort('WorkStation')}>Poste de travail{getSortIcon('workStationID')}</a></th>
                    <th><a className="sortable-column" onClick={() => requestSort('Machine')}>Machine{getSortIcon('machineID')}</a></th>
                    <th><a className="sortable-column" onClick={() => requestSort('workTime')}>Temps de travail{getSortIcon('workTime')}</a></th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {operations.map((operation) => (
                    <OperationListItem key={operation.operationID} operation={operation} />
                ))}
                </tbody>
            </table>
            <div className="table-bottom-bar">
                <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    );
};

export default OperationList;
