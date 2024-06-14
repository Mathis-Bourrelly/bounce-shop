const parts = require('../model/parts')

exports.getAllParts = async () => await parts.findAll();

exports.getPartById = async (partID) => {
    return await parts.findByPk(partID)
};
exports.createPart = async (body) => {
    return parts.create(body);
};

exports.updatePart = async (partID, data) => {
    await parts.update(data, {
        where: {partID}
    });
}

exports.deletePart = async (partID) => {
    await parts.destroy({where: {partID}});
}
