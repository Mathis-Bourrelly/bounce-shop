import React, {useEffect, useState} from 'react';
import './css/partList.css';
import PartListItem from "./PartListItem";

const Table = () => {
    const [parts, setParts] = useState([]);
    const [sortConfig, setSortConfig] = useState({key: '', direction: ''});

    useEffect(() => {
        const fetchParts = async () => {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5mciIsImlhdCI6MTcxODI4MjIwN30.qublNq3IcvIRqgtup3HP-Vf7njQFkbJ_w4cxPIv5uEc"

            try {
                const res = await fetch("http://localhost:4000/parts", {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                const data = await res.json();
                setParts(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchParts();
    }, []);

    const sortedParts = [...parts];
    if (sortConfig.key) {
        sortedParts.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
    }

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key) => {
        if (sortConfig.key !== key) {
            return <img width="16" height="16" src="https://img.icons8.com/fluency-systems-regular/48/sort.png" alt="sort"/>;
        }
        if (sortConfig.direction === 'ascending') {
            return <img width="16" height="16" src="https://img.icons8.com/fluency-systems-regular/48/sort-amount-up.png" alt="sort-amount-up"/>;
        }
        return <img width="16" height="16" src="https://img.icons8.com/fluency-systems-regular/48/generic-sorting.png" alt="generic-sorting"/>;
    };

    return (
        <div className="table-container">
            <table className="styled-table">
                <thead>
                <tr>
                    <th>
                        <a className="sortable-column" onClick={() => requestSort('partID')}>ID{getSortIcon('partID')}</a>
                    </th>
                    <th>
                        <a className="sortable-column" onClick={() => requestSort('label')}>Label{getSortIcon('label')}</a>
                    </th>
                    <th>
                        <a className="sortable-column" onClick={() => requestSort('rangeID')}>Gamme{getSortIcon('rangeID')}</a>
                    </th>
                    <th>
                        <a className="sortable-column" onClick={() => requestSort('Type')}>Type{getSortIcon('Type')}</a>
                    </th>
                    <th>
                        <a className="sortable-column" onClick={() => requestSort('quantity')}>Quantité{getSortIcon('quantity')}</a>
                    </th>
                    <th>
                        <a className="sortable-column" onClick={() => requestSort('price')}>Prix{getSortIcon('price')}</a>
                    </th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {sortedParts.map((part) => (
                    <PartListItem part={part}></PartListItem>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
