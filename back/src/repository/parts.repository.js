const {sequelize} = require("../core/postgres");
const {Op} = require('@sequelize/core');
const previousParts = require('../model/previousParts');
const prices = require('../model/prices');
const parts = require('../model/parts');
const suppliers = require('../model/suppliers');
const ranges = require('../model/ranges');

exports.getAllParts = async () => await parts.findAll();


exports.getPartById = async (partID) => {
    return await parts.findByPk(partID, {
        include: [
            {
                model: suppliers,
                required: false
            },
            {
                model: ranges,
                required: false,
            },
            {
                model: prices,
                required: false,
            },
            {
                model: previousParts,
                required: false
            },

        ]
    });
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

    return await parts.findAll({
        where: whereCondition,
        limit: 5
    });
}

exports.getPreviousPart = async (partID) => {
    return await parts.findAll({
        where: {
            partID: partID
        },
    },)
}

exports.createPart = async (body) => {
    return parts.create(body);
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

exports.getParts = async (column, direction, page, pageSize, searchColumn, searchText, partType) => {
    const offset = (page - 1) * pageSize;
    const order = `${direction.toUpperCase()}`;
    const replacements = {
        limit: pageSize,
        offset: offset
    };

    let query = `
        SELECT p.*, pr.price, r."rangeID", s.name as supplierName
        FROM "Parts" p
                 LEFT JOIN (SELECT pr1.*
                            FROM "Prices" pr1
                                     INNER JOIN (SELECT "partID", MAX("date") as maxDate
                                                 FROM "Prices"
                                                 GROUP BY "partID") pr2
                                                ON pr1."partID" = pr2."partID" AND pr1."date" = pr2.maxDate) pr
                           ON p."partID" = pr."partID"
                 LEFT JOIN "Ranges" r ON p."partID" = r."partID"
                 LEFT JOIN "Suppliers" s ON p."supplierID" = s."supplierID"`;

    let whereClause = '';

    if (partType) {
        whereClause = ` WHERE p."type" = :type`;
        replacements.type = partType;
    }

    if (searchColumn && searchText !== undefined) {
        const searchCondition = ` ${searchColumn === "price" ? 'pr."price"' : searchColumn === "suppliername" ? 's."name"' : searchColumn === "rangeID" ? 'r."rangeID"' : `p."${searchColumn}"`}::text LIKE :search`;

        if (whereClause) {
            whereClause += ` AND ${searchCondition}`;
        } else {
            whereClause = ` WHERE ${searchCondition}`;
        }
        replacements.search = `%${searchText}%`;
    }

    query += whereClause;

    if ((column === "partID") || (column === "label") || (column === "quantity")) {
        query += ` ORDER BY p."${column}" ${order} LIMIT :limit OFFSET :offset`;
    } else if (column === "price") {
        query += ` ORDER BY pr."price" ${order} LIMIT :limit OFFSET :offset`;
    } else if (column === "suppliername") {
        query += ` ORDER BY s."name" ${order} LIMIT :limit OFFSET :offset`;
    } else if (column === "rangeID") {
        query += ` ORDER BY r."rangeID" ${order} LIMIT :limit OFFSET :offset`;
    }

    try {
        const result = await sequelize.query(query, {
            replacements: replacements,
        });

        return result;
    } catch (error) {
        console.error('Error fetching parts:', error);
        throw error;
    }
};


exports.getPartsCount = async (searchColumn, searchText, partType) => {
    let query = `
        SELECT COUNT(*)
        FROM (
            SELECT p."partID"
            FROM "Parts" p
            LEFT JOIN "Suppliers" s ON p."supplierID" = s."supplierID"
            LEFT JOIN "Prices" pr ON p."partID" = pr."partID"
            LEFT JOIN "Ranges" r ON p."partID" = r."partID"
    `;

    const replacements = {
        search: `%${searchText}%`
    };

    let whereClause = '';

    if (partType) {
        whereClause = ` WHERE p."type" = :type`;
        replacements.type = partType;
    }

    if (searchColumn && searchText !== undefined) {
        const searchCondition = ` ${searchColumn === "price" ? 'pr."price"' : searchColumn === "suppliername" ? 's."name"' : searchColumn === "rangeID" ? 'r."rangeID"' : `p."${searchColumn}"`}::text LIKE :search`;

        if (whereClause) {
            whereClause += ` AND ${searchCondition}`;
        } else {
            whereClause = ` WHERE ${searchCondition}`;
        }
        replacements.search = `%${searchText}%`;
    }

    query += whereClause;

    query += `
            GROUP BY p."partID"
        ) as countSubquery
    `;

    try {
        return await sequelize.query(query, {
            replacements: replacements,
        });

    } catch (error) {
        console.error('Error fetching parts count:', error);
        throw error;
    }
};


