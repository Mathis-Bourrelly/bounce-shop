import React from 'react';

const OperationListItem = ({ operation }) => {
    return (
        <tr>
            <td>{operation.operationID}</td>
            <td>{operation.label}</td>
            <td>{operation.rangeID}</td>
            <td>{operation.WorkStation.label}</td>
            <td>{operation.Machine.label}</td>
            <td>{operation.workTime}</td>
            <td>...</td>
        </tr>
    );
};

export default OperationListItem;
