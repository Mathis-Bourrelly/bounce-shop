const express = require('express');
const router = express.Router();
const operationRepository = require('../repository/operations.repository');
const partRepository = require("../repository/parts.repository");

router.get('/', async (req, res) => {
    try {
        const operations = await operationRepository.getAllOperations();
        res.json(operations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/getById/:id', async (req, res) => {
    try {
        const operation = await operationRepository.getOperationById(req.params.id);
        if (!operation) {
            return res.status(404).json({ error: 'Operation not found' });
        }
        res.json(operation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/search?', async (req, res) => {
    let part = await operationRepository.getByString(req.query.term);
    res.send(part);
});

router.get('/getByQuery/:direction/:column/:page?', async (req, res) => {
    const { direction, column, page } = req.params;
    const pageSize = 12;
    const { searchColumn, searchText } = req.query;

    try {
        const operations = await operationRepository.getOperationsByQuery(column, direction, page, pageSize, searchColumn, searchText);
        const operationsCount = await operationRepository.getOperationsCount(searchColumn, searchText);
        console.log("operationsCount",operationsCount)
        res.send({ operations: operations, count: operationsCount });
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: e.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newOperation = await operationRepository.createOperation(req.body);
        res.status(201).json(newOperation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedOperation = await operationRepository.updateOperation(req.params.id, req.body);
        res.json(updatedOperation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await operationRepository.deleteOperation(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

exports.initializeRoutes = () => router;
