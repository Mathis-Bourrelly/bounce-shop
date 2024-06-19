const Operations = require('../model/operations');

exports.getAllOperations = async () => {
    return await Operations.findAll();
};

exports.getOperationById = async (operationID) => {
    return await Operations.findByPk(operationID);
};

exports.createOperation = async (body) => {
    return await Operations.create(body);
};

exports.updateOperation = async (operationID, data) => {
    const foundOperation = await Operations.findOne({ where: { operationID } });

    if (!foundOperation) {
        throw new Error('Operation not found');
    }

    await Operations.update(data, { where: { operationID } });
    return await Operations.findByPk(operationID);
};

exports.deleteOperation = async (operationID) => {
    await Operations.destroy({ where: { operationID } });
};
