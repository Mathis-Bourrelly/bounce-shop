const OperationHistories = require('../model/OperationHistories');

exports.getAllOperationHistories = async () => {
    return await OperationHistories.findAll();
};

exports.getOperationHistoriesById = async (operationID, rangeID) => {
    return await OperationHistories.findOne({ where: { operationID, rangeID } });
};

exports.createOperationHistories = async (body) => {
    return await OperationHistories.create(body);
};

exports.updateOperationHistories = async (operationID, rangeID, data) => {
    const foundOperationHistories = await OperationHistories.findOne({ where: { operationID, rangeID } });

    if (!foundOperationHistories) {
        throw new Error('OperationHistories not found');
    }

    await OperationHistories.update(data, { where: { operationID, rangeID } });
    return await OperationHistories.findOne({ where: { operationID, rangeID } });
};

exports.deleteOperationHistories = async (operationID, rangeID) => {
    await OperationHistories.destroy({ where: { operationID, rangeID } });
};
