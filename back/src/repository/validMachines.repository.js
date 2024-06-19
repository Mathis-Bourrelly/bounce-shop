const validMachines = require('../model/validMachines');

exports.getAllValidMachines = async () => {
    return await validMachines.findAll();
};

exports.getValidMachineById = async (validMachineID) => {
    return await validMachines.findByPk(validMachineID);
};

exports.createValidMachine = async (body) => {
    return await validMachines.create(body);
};

exports.updateValidMachine = async (validMachineID, data) => {
    const foundValidMachine = await validMachines.findOne({ where: { validMachineID } });

    if (!foundValidMachine) {
        throw new Error('validMachine not found');
    }

    await validMachines.update(data, { where: { validMachineID } });
    return await validMachines.findByPk(validMachineID);
};

exports.deleteValidMachine = async (validMachineID) => {
    await validMachines.destroy({ where: { validMachineID } });
};
