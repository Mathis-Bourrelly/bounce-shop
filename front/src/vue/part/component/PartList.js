import React, {useEffect, useState} from 'react';
import "./css/partList.css";
import PartListItem from './PartListItem';
import Pagination from "../../component/Pagination";
import Api from "../../../API";

const Table = () => {
    const [parts, setParts] = useState([]);
    const [sortConfig, setSortConfig] = useState({key: 'partID', direction: 'asc'});
    const [searchText, setSearchText] = useState('');
    const [searchColumn, setSearchColumn] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [typeFilters, setTypeFilters] = useState({
        raw: false,
        bought: false,
        intermediate: false,
        deliverable: false
    });
    const itemPerPage = 13
    const api = new Api()
    useEffect(() => {
        fetchParts();
    }, [sortConfig, searchText, searchColumn, currentPage, typeFilters]);

    const fetchParts = async () => {
        const token = sessionStorage.getItem("token");

        try {
            let url = `parts/${sortConfig.direction}/${sortConfig.key}/${currentPage}?searchColumn=${searchColumn}&searchText=${searchText}`;

            // Ajout des filtres de type à l'URL
            const selectedTypes = Object.keys(typeFilters).filter(key => typeFilters[key]).join('');
            if (selectedTypes) {
                url += `&type=${selectedTypes}`;
            }
            const data = await api.getFromRoute(url,token)
            setParts(data.parts);
            setTotalPages(Math.ceil(data.count / itemPerPage));
        } catch (error) {
            console.log('Error fetching data:', error);
            if (error.status === 401) {
                api.navigate("/login")
            }
        }
    };

    const getSortIcon = (key) => {
        if (sortConfig.key !== key) {
            return <img width="16" height="16" src="https://img.icons8.com/fluency-systems-regular/48/sort.png"
                        alt="sort"/>;
        }
        if (sortConfig.direction === 'asc') {
            return <img width="16" height="16"
                        src="https://img.icons8.com/fluency-systems-regular/48/sort-amount-up.png"
                        alt="sort-amount-up"/>;
        }
        return <img width="16" height="16" src="https://img.icons8.com/fluency-systems-regular/48/generic-sorting.png"
                    alt="generic-sorting"/>;
    };

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({key, direction});
    };

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
        setCurrentPage(1)
    };

    const handleSearchColumnChange = (e) => {
        setSearchColumn(e.target.value === "no_filter" ? "" : e.target.value);
        setCurrentPage(1)
    };

    const handleTypeFilterChange = (type) => {
        setTypeFilters(prevFilters => ({
            ...prevFilters,
            [type]: !prevFilters[type]
        }));
        setCurrentPage(1)
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="table-container">
            <div className="table-top-bar">
                <div className="part-research">
                    <input type="text" onChange={handleSearchTextChange} placeholder="🔎recherche"/>
                    <select name="column" id="column-select" value={searchColumn} onChange={handleSearchColumnChange}>
                        <option value="no_filter">Aucun filtre</option>
                        <option value="partID">ID</option>
                        <option value="label">Label</option>
                        <option value="rangeID">Gamme</option>
                        <option value="quantity">Quantité</option>
                        <option value="price">Prix</option>
                    </select>
                    <div className="cat bought">
                        <label className="type-checkbox bought">
                            <input type="checkbox" onChange={() => handleTypeFilterChange('B')}/>
                            <span>Acheté</span>
                        </label>
                    </div>

                    <div className="cat deliverable">
                        <label className="type-checkbox deliverable">
                            <input type="checkbox" onChange={() => handleTypeFilterChange('D')}/>
                            <span>Déliverable</span>
                        </label>
                    </div>

                    <div className="cat raw">
                        <label className="type-checkbox raw">
                            <input type="checkbox" onChange={() => handleTypeFilterChange('R')}/>
                            <span>Matériaux</span>
                        </label>
                    </div>

                    <div className="cat intermediate">
                        <label className="type-checkbox intermediate">
                            <input type="checkbox" onChange={() => handleTypeFilterChange('I')}/>
                            <span>Intermédiaire</span>
                        </label>
                    </div>

                </div>
            </div>
            <table className="styled-table">
                <thead>
                <tr>
                    <th>
                        <a className="sortable-column"
                           onClick={() => requestSort('partID')}>ID{getSortIcon('partID')}</a>
                    </th>
                    <th>
                        <a className="sortable-column"
                           onClick={() => requestSort('label')}>Label{getSortIcon('label')}</a>
                    </th>
                    <th>
                        <a className="sortable-column"
                           onClick={() => requestSort('rangeID')}>Gamme{getSortIcon('rangeID')}</a>
                    </th>
                    <th>Type</th>
                    <th>
                        <a className="sortable-column"
                           onClick={() => requestSort('quantity')}>Quantité{getSortIcon('quantity')}</a>
                    </th>
                    <th>
                        <a className="sortable-column"
                           onClick={() => requestSort('price')}>Prix{getSortIcon('price')}</a>
                    </th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {parts.map((part) => (
                    <PartListItem key={part.partID} part={part}></PartListItem>
                ))}
                </tbody>
            </table>
            <div className="table-bottom-bar">
                <Pagination currentPage={currentPage} totalPages={totalPages}
                            setCurrentPage={setCurrentPage}></Pagination>
            </div>
        </div>
    );
};

export default Table;
