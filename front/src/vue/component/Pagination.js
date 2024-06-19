import React from 'react';

const Pagination = ({currentPage, totalPages, setCurrentPage}) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    if (totalPages > 1) {
        return (
            <div className="pagination">
                <a className="pagination-link" onClick={handlePrevious}>Précédent</a>
                <a onClick={() => setCurrentPage(1)}
                   className={`pagination-link ${currentPage === 1 ? 'page-active' : ''}`}>1</a>
                {currentPage > 2 && <span>...</span>}
                {currentPage > 1 && currentPage < totalPages && (
                    <a className="page-active">{currentPage}</a>
                )}
                {currentPage < totalPages - 1 && <span>...</span>}
                <a onClick={() => setCurrentPage(totalPages)}
                   className={`pagination-link ${currentPage === totalPages ? 'page-active' : ''}`}>{totalPages}</a>
                <a className="pagination-link" onClick={handleNext}>Suivant</a>
            </div>
        )
    } else return (
        <div className="pagination">
            <a className="page-active">{currentPage}</a>
        </div>
    )
};

export default Pagination;