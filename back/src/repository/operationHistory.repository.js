const OperationHistory = require('../model/operationHistory');

exports.getAllOperationHistories = async () => {
    return await OperationHistory.findAll();
};

exports.getOperationHistoryById = async (operationID, rangeID) => {
    return await OperationHistory.findOne({ where: { operationID, rangeID } });
};

exports.createOperationHistory = async (body) => {
    return await OperationHistory.create(body);
};

exports.updateOperationHistory = async (operationID, rangeID, data) => {
    const foundOperationHistory = await OperationHistory.findOne({ where: { operationID, rangeID } });

    if (!foundOperationHistory) {
        throw new Error('OperationHistory not found');
    }

    await OperationHistory.update(data, { where: { operationID, rangeID } });
    return await OperationHistory.findOne({ where: { operationID, rangeID } });
};

exports.deleteOperationHistory = async (operationID, rangeID) => {
    await OperationHistory.destroy({ where: { operationID, rangeID } });
};
