const Ranges = require('../model/ranges');

exports.getAllRanges = async () => {
    return await Ranges.findAll();
};

exports.getRangeById = async (rangeID) => {
    return await Ranges.findByPk(rangeID);
};

exports.createRange = async (body) => {
    return await Ranges.create(body);
};

exports.updateRange = async (rangeID, data) => {
    const foundRange = await Ranges.findOne({ where: { rangeID } });

    if (!foundRange) {
        throw new Error('Range not found');
    }

    await Ranges.update(data, { where: { rangeID } });
    return await Ranges.findByPk(rangeID);
};

exports.deleteRange = async (rangeID) => {
    await Ranges.destroy({ where: { rangeID } });
};
