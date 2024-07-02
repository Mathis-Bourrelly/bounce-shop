const jobQualifications = require('../model/jobQualifications');
    
exports.getAllMachines = async () => {
    return await jobQualifications.findAll();
};

exports.getMachineById = async (jobQualificationID) => {
    return await jobQualifications.findByPk(jobQualificationID);
};

exports.createMachine = async (body) => {
    return await jobQualifications.create(body);
};

exports.updateMachine = async (machineID, data) => {
    const foundMachine = await jobQualifications.findOne({ where: { jobQualificationID } });

    if (!foundMachine) {
        throw new Error('Machine not found');
    }

    await jobQualifications.update(data, { where: { jobQualificationID } });
    return await jobQualifications.findByPk(machineID);
};

exports.deleteMachine = async (jobQualificationID) => {
    await jobQualifications.destroy({ where: { jobQualificationID } });
};