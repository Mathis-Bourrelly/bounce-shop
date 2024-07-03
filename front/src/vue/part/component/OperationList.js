import React from 'react';

const OperationList = ({operations}) => {
    return (
        <table className="styled-table">
            <thead>
            <tr>
                <th>Nom</th>
                <th>Atelier</th>
                <th>Machine</th>
                <th>Temps de travail</th>
                <th>Action</th>
            </tr>
            </thead>
            {operations &&<tbody>
            {operations.map(operation => (
                <tr key={operation.id}>
                    <td>{operation.label}</td>
                    <td>{operation.WorkStation.label}</td>
                    <td>{operation.Machine.label}</td>
                    <td>{operation.workTime}</td>
                    <td>...</td>
                </tr>
            ))}
            </tbody>}
        </table>
    );
};

export default OperationList;
