const Suppliers = require('../model/suppliers');

exports.getAllSuppliers = async () => {
    return await Suppliers.findAll();
};

exports.getSupplierById = async (supplierID) => {
    return await Suppliers.findByPk(supplierID);
};

exports.createSupplier = async (body) => {
    return await Suppliers.create(body);
};

exports.updateSupplier = async (supplierID, data) => {
    const foundSupplier = await Suppliers.findOne({ where: { supplierID } });

    if (!foundSupplier) {
        throw new Error('Supplier not found');
    }

    await Suppliers.update(data, { where: { supplierID } });
    return await Suppliers.findByPk(supplierID);
};

exports.deleteSupplier = async (supplierID) => {
    await Suppliers.destroy({ where: { supplierID } });
};
