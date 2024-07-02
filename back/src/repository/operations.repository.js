const operations = require('../model/operations');
const {Op} = require("@sequelize/core");
const ranges = require("../model/ranges");
const workStations = require("../model/workStations");
const machines = require("../model/machines");
const {sequelize} = require("../core/postgres");
const {QueryTypes} = require("sequelize");

exports.getAllOperations = async () => {
    return await operations.findAll();
};

exports.getOperationById = async (operationID) => {
    return await operations.findByPk(operationID);
};

exports.getByString = async (searchString) => {
    //const isNumeric = !isNaN(searchString);

    const whereCondition = {
        //[Op.or]: [
        //    {
        label: {[Op.like]: `%${searchString}%`}
        //    }
        //]
    };
    /*

        if (isNumeric) {
            whereCondition[Op.or].push({ partID: searchString });
        }
    */

    return await operations.findAll({
        where: whereCondition,
        limit: 5
    });
}

exports.getOperationsByQuery = async (column, direction, page, pageSize, searchColumn, searchText) => {
    const offset = (page - 1) * pageSize;
    const whereClause = {};
    if (searchColumn && searchText) {
        whereClause[searchColumn] = { [Op.like]: `%${searchText}%` };
    }

    let orderClause;
    if (column === 'WorkStation') {
        orderClause = [[{ model: workStations, as: 'WorkStation' }, 'label', direction]];
    } else if (column === 'Machine') {
        orderClause = [[{ model: machines, as: 'Machine' }, 'label', direction]];
    } else {
        orderClause = [[column, direction]];
    }

    return await operations.findAll({
        where: whereClause,
        include: [
            { model: workStations, as: 'WorkStation' },
            { model: machines, as: 'Machine' }
        ],
        order: orderClause,
        limit: pageSize,
        offset: offset
    });
};

exports.getOperationsCount = async (searchColumn, searchText) => {
    const whereClause = {};
    if (searchColumn && searchText) {
        whereClause[searchColumn] = { [Op.like]: `%${searchText}%` };
    }

    return await operations.count({
        where: whereClause
    });
};

exports.createOperation = async (body) => {
    return await operations.create(body);
};

exports.updateOperation = async (operationID, data) => {
    const foundOperation = await operations.findOne({ where: { operationID } });

    if (!foundOperation) {
        throw new Error('Operation not found');
    }

    await operations.update(data, { where: { operationID } });
    return await operations.findByPk(operationID);
};

exports.deleteOperation = async (operationID) => {
    await operations.destroy({ where: { operationID } });
};
