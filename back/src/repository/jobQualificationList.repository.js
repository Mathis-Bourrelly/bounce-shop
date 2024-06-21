const JobQualificationList = require('../model/JobQualificationList');
    
exports.getAllMachines = async () => {
    return await JobQualificationList.findAll();
};

exports.getMachineById = async (jobQualificationListID) => {
    return await JobQualificationList.findByPk(jobQualificationListID);
};

exports.createMachine = async (body) => {
    return await JobQualificationList.create(body);
};

exports.updateMachine = async (machineID, data) => {
    const foundMachine = await JobQualificationList.findOne({ where: { jobQualificationListID } });

    if (!foundMachine) {
        throw new Error('Machine not found');
    }

    await JobQualificationList.update(data, { where: { jobQualificationListID } });
    return await JobQualificationList.findByPk(machineID);
};

exports.deleteMachine = async (jobQualificationListID) => {
    await JobQualificationList.destroy({ where: { jobQualificationListID } });
};