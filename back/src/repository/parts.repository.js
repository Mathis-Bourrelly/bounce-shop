const previousParts = require('../model/previousParts');
const partLists = require('../model/partLists');
const suppliers = require('../model/suppliers');
const prices = require('../model/prices');
const parts = require('../model/parts');
const {sequelize} = require("../core/postgres");

exports.getAllParts = async () => await parts.findAll();

exports.getPartById = async (partID) => {
    return await parts.findByPk(partID);
};

exports.createPart = async (body) => {
    return parts.create(body);
};

exports.createPartList = async (body) => {
    return partLists.create(body);
};

exports.createPreviousPart = async (body) => {
    return previousParts.create(body);
};

exports.createPrice = async (body) => {
    return prices.create(body);
};

exports.updatePart = async (partID, data) => {
    await parts.update(data, {
        where: {partID}
    });
};

exports.deletePart = async (partID) => {
    await parts.destroy({where: {partID}});
};

exports.getParts = async (column, direction, page, pageSize, searchColumn, searchText, type) => {
    const offset = (page - 1) * pageSize;
    const order = `${direction.toUpperCase()}`;
    const replacements = {
        limit: pageSize,
        offset: offset
    };
    let query = `SELECT * FROM "Parts"`;

    const typeFilters = [];
    if (type) {
        if (type.includes('R')) {
            typeFilters.push('"isRaw" = true')
        } else {typeFilters.push('"isRaw" = false')}
        if (type.includes('B')) {
            typeFilters.push('"isBought" = true');
        }else {typeFilters.push('"isBought" = false')}
        if (type.includes('I')) {
            typeFilters.push('"isIntermediate" = true');
        }else {typeFilters.push('"isIntermediate" = false')}
        if (type.includes('D')) {
            typeFilters.push('"isDeliverable" = true');
        }else {typeFilters.push('"isDeliverable" = false')}
    }

    if (searchColumn && searchText !== undefined) {
        query += ` WHERE "${searchColumn}"::text LIKE :search`;
        replacements.search = `%${searchText}%`;

        if (typeFilters.length > 0) {
            query += ` AND (${typeFilters.join(' AND ')})`;
        }
    } else if (typeFilters.length > 0) {
        query += ` WHERE ${typeFilters.join(' AND ')}`;
    }

    query += ` ORDER BY "${column}" ${order} LIMIT :limit OFFSET :offset`;

    let result = await sequelize.query(query, {
        replacements: replacements
    });

    return result;
};


exports.getPartsCount = async (searchColumn, searchText, type) => {
    let query = `SELECT COUNT(*) FROM "Parts"`;
    const replacements = {
        search: `%${searchText}%`
    };

    const typeFilters = [];

    if (type) {
        if (type.includes('R')) {
            typeFilters.push('"isRaw" = true');
        } else {
            typeFilters.push('"isRaw" = false');
        }
        if (type.includes('B')) {
            typeFilters.push('"isBought" = true');
        } else {
            typeFilters.push('"isBought" = false');
        }
        if (type.includes('I')) {
            typeFilters.push('"isIntermediate" = true');
        } else {
            typeFilters.push('"isIntermediate" = false');
        }
        if (type.includes('D')) {
            typeFilters.push('"isDeliverable" = true');
        } else {
            typeFilters.push('"isDeliverable" = false');
        }
    }

    let whereClause = '';

    if (searchColumn && searchText !== undefined) {
        whereClause = ` WHERE "${searchColumn}"::text LIKE :search`;
        if (typeFilters.length > 0) {
            whereClause += ` AND (${typeFilters.join(' AND ')})`;
        }
    } else if (typeFilters.length > 0) {
        whereClause = ` WHERE ${typeFilters.join(' AND ')}`;
    }

    query += whereClause;

    const result = await sequelize.query(query, {
        replacements: replacements,
        type: sequelize.QueryTypes.COUNT
    });

    return result;
};