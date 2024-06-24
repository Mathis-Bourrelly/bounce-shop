const jobQualificationLists = require('../model/jobQualificationLists');
    
exports.getAllMachines = async () => {
    return await jobQualificationLists.findAll();
};

exports.getMachineById = async (jobQualificationListID) => {
    return await jobQualificationLists.findByPk(jobQualificationListID);
};

exports.createMachine = async (body) => {
    return await jobQualificationLists.create(body);
};

exports.updateMachine = async (machineID, data) => {
    const foundMachine = await jobQualificationLists.findOne({ where: { jobQualificationListID } });

    if (!foundMachine) {
        throw new Error('Machine not found');
    }

    await jobQualificationLists.update(data, { where: { jobQualificationListID } });
    return await jobQualificationLists.findByPk(machineID);
};

exports.deleteMachine = async (jobQualificationListID) => {
    await jobQualificationLists.destroy({ where: { jobQualificationListID } });
};