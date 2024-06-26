const {sequelize} = require("../core/postgres");
const { Op } = require('@sequelize/core');
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
                label: { [Op.like]: `%${searchString}%` }
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

exports.getParts = async (column, direction, page, pageSize, searchColumn, searchText, type) => {
    const offset = (page - 1) * pageSize;
    const order = `${direction.toUpperCase()}`;
    const replacements = {
        limit: pageSize,
        offset: offset
    };

    let query = `
        SELECT p.*, pr.price, r."rangeID", s.name as supplierName
        FROM "Parts" p
        LEFT JOIN (
            SELECT pr1.*
            FROM "Prices" pr1
            INNER JOIN (
                SELECT "partID", MAX("date") as maxDate
                FROM "Prices"
                GROUP BY "partID"
            ) pr2 ON pr1."partID" = pr2."partID" AND pr1."date" = pr2.maxDate
        ) pr ON p."partID" = pr."partID"
        LEFT JOIN "Ranges" r ON p."partID" = r."partID"
        LEFT JOIN "Suppliers" s ON p."supplierID" = s."supplierID"
    `;

    if (type) {
        query += ` WHERE p."type" = :type`;
        replacements.type = type;
    }

    if (searchColumn && searchText !== undefined) {
        if (type) {
            query += ` AND p."${searchColumn}"::text LIKE :search`;
        } else {
            query += ` WHERE p."${searchColumn}"::text LIKE :search`;
        }
        replacements.search = `%${searchText}%`;
    }

    query += ` ORDER BY p."${column}" ${order} LIMIT :limit OFFSET :offset`;

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
    let query = `SELECT COUNT(*)
                 FROM "Parts" p`;

    const replacements = {
        search: `%${searchText}%`
    };

    if (partType) {
        query += ` WHERE p."type" = :type`;
        replacements.type = partType;
    }

    if (searchColumn && searchText !== undefined) {
        if (partType) {
            query += ` AND p."${searchColumn}"::text LIKE :search`;
        } else {
            query += ` WHERE p."${searchColumn}"::text LIKE :search`;
        }
    }

    return await sequelize.query(query, {
        replacements: replacements,
    });


};
