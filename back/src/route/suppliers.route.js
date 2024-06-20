const express = require('express');
const router = express.Router();
const supplierRepository = require('../repository/suppliers.repository');
const {body, validationResult} = require("express-validator");


router.get('/', async (req, res) => {
    try {
        const suppliers = await supplierRepository.getAllSuppliers();
        res.json(suppliers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const supplier = await supplierRepository.getSupplierById(req.params.id);
        if (!supplier) {
            return res.status(404).json({ error: 'Supplier not found' });
        }
        res.json(supplier);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/',
    body('name').not().isEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        let newSupplier = await supplierRepository.createSupplier(req.body);
        res.send(newSupplier);
    });

router.put('/:id', async (req, res) => {
    try {
        const updatedSupplier = await supplierRepository.updateSupplier(req.params.id, req.body);
        res.json(updatedSupplier);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await supplierRepository.deleteSupplier(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

exports.initializeRoutes = () => router;
