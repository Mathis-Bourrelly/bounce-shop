const JobQualificationList = require('../model/JobQualificationList');
    
exports.getAllMachines = async () => {
    return await JobQualificationList.findAll();
};

exports.getMachineById = async (JobQualificationListID) => {
    return await JobQualificationList.findByPk(JobQualificationListID);
};

exports.createMachine = async (body) => {
    return await JobQualificationList.create(body);
};

exports.updateMachine = async (machineID, data) => {
    const foundMachine = await JobQualificationList.findOne({ where: { JobQualificationListID } });

    if (!foundMachine) {
        throw new Error('Machine not found');
    }

    await JobQualificationList.update(data, { where: { JobQualificationListID } });
    return await JobQualificationList.findByPk(machineID);
};

exports.deleteMachine = async (JobQualificationListID) => {
    await JobQualificationList.destroy({ where: { JobQualificationListID } });
};