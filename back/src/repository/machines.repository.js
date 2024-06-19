const machines = require('../model/machines');

exports.getAllMachines = async () => {
    return await machines.findAll();
};

exports.getMachineById = async (machineID) => {
    return await machines.findByPk(machineID);
};

exports.createMachine = async (body) => {
    return await machines.create(body);
};

exports.updateMachine = async (machineID, data) => {
    const foundMachine = await machines.findOne({ where: { machineID } });

    if (!foundMachine) {
        throw new Error('Machine not found');
    }

    await machines.update(data, { where: { machineID } });
    return await machines.findByPk(machineID);
};

exports.deleteMachine = async (machineID) => {
    await machines.destroy({ where: { machineID } });
};
