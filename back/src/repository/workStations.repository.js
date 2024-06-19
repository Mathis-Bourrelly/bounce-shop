const WorkStations = require('../model/workStations');

exports.getAllWorkStations = async () => {
    return await WorkStations.findAll();
};

exports.getWorkStationById = async (workStationID) => {
    return await WorkStations.findByPk(workStationID);
};

exports.createWorkStation = async (body) => {
    return await WorkStations.create(body);
};

exports.updateWorkStation = async (workStationID, data) => {
    const foundWorkStation = await WorkStations.findOne({ where: { workStationID } });

    if (!foundWorkStation) {
        throw new Error('WorkStation not found');
    }

    await WorkStations.update(data, { where: { workStationID } });
    return await WorkStations.findByPk(workStationID);
};

exports.deleteWorkStation = async (workStationID) => {
    await WorkStations.destroy({ where: { workStationID } });
};
