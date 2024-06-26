import React, {useEffect, useState} from 'react';
import "./css/partList.css";
import PartListItem from './PartListItem';
import Pagination from "../../component/Pagination";
import Api from "../../../API";

import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    const itemPerPage = 13;
    const api = new Api();
    const queryParameters = new URLSearchParams(window.location.search)
    const toastData = queryParameters.get("toastData")

    useEffect(() => {
        fetchParts();
    }, [sortConfig, searchText, searchColumn, currentPage, typeFilters]);

    useEffect(() => {
            switch (toastData) {
                case "partSuccess" :
                    toast.success("Pièce créer avec succès", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: 0,
                        theme: "light",
                        transition: Bounce,
                    });
                    break

                default :
                    break
                }
    },[toastData])

    const fetchParts = async () => {
        const token = sessionStorage.getItem("token");

        try {
            let url = `parts/getByQuery/${sortConfig.direction}/${sortConfig.key}/${currentPage}?searchColumn=${searchColumn}&searchText=${searchText}`;

            const selectedTypes = Object.keys(typeFilters).filter(key => typeFilters[key]).map(key => {
                switch (key) {
                    case 'raw':
                        return 'R';
                    case 'bought':
                        return 'B';
                    case 'intermediate':
                        return 'I';
                    case 'deliverable':
                        return 'D';
                    default:
                        return '';
                }
            }).join('');

            if (selectedTypes) {
                url += `&type=${selectedTypes}`;
            }

            const data = await api.getFromRoute(url, token);
            setParts(data.parts);
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
        setCurrentPage(1);
    };

    const handleSearchColumnChange = (e) => {
        setSearchColumn(e.target.value === "no_filter" ? "" : e.target.value);
        setCurrentPage(1);
    };

    const handleTypeFilterChange = (type) => {
        setTypeFilters(prevFilters => {
            const newFilters = {
                raw: false,
                bought: false,
                intermediate: false,
                deliverable: false,
            };

            if (prevFilters[type]) {
                newFilters[type] = false;
            } else {
                newFilters[type] = true;
            }

            return newFilters;
        });
        setCurrentPage(1);
    };

    return (

        <div className="table-container">
            <div className="table-top-bar">
                <div className="part-research">
                    <input id="searchField" type="text" onChange={handleSearchTextChange} placeholder="🔎recherche"/>
                    <select name="column" id="column-select" value={searchColumn}
                            onChange={handleSearchColumnChange}>
                        <option value="no_filter">Aucun filtre</option>
                        <option value="partID">ID</option>
                        <option value="label">Nom</option>
                        <option value="description">Description</option>
                        <option value="rangeID">Gamme</option>
                        <option value="suppliername">Fournisseur</option>
                        <option value="quantity">Quantité</option>
                        <option value="price">Prix</option>
                    </select>
                    <div className="cat bought">
                        <label className="type-checkbox bought">
                            <input
                                type="checkbox"
                                checked={typeFilters.bought}
                                onChange={() => handleTypeFilterChange('bought')}
                            />
                            <span>Acheté</span>
                        </label>
                    </div>

                    <div className="cat deliverable">
                        <label className="type-checkbox deliverable">
                            <input
                                type="checkbox"
                                checked={typeFilters.deliverable}
                                onChange={() => handleTypeFilterChange('deliverable')}
                            />
                            <span>Déliverable</span>
                        </label>
                    </div>

                    <div className="cat raw">
                        <label className="type-checkbox raw">
                            <input
                                type="checkbox"
                                checked={typeFilters.raw}
                                onChange={() => handleTypeFilterChange('raw')}
                            />
                            <span>Matériaux</span>
                        </label>
                    </div>

                    <div className="cat intermediate">
                        <label className="type-checkbox intermediate">
                            <input
                                type="checkbox"
                                checked={typeFilters.intermediate}
                                onChange={() => handleTypeFilterChange('intermediate')}
                            />
                            <span>Intermédiaire</span>
                        </label>
                    </div>
                </div>
                <button className="btn-color" onClick={() => api.navigateTo("/part/new")}>Créer une pièce</button>
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
                           onClick={() => requestSort('label')}>Nom{getSortIcon('label')}</a>
                    </th>
                    <th>
                        <a className="sortable-column"
                           onClick={() => requestSort('rangeID')}>Gamme{getSortIcon('rangeID')}</a>
                    </th>
                    <th>
                        <a className="sortable-column"
                           onClick={() => requestSort('suppliername')}>Fournisseur{getSortIcon('suppliername')}</a>
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
                    <PartListItem key={part.partID} part={part} api={api}/>
                ))}
                </tbody>
            </table>
            <div className="table-bottom-bar">
                <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={10}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};

export default Table;
