const express = require('express');
const router = express.Router();
const operationRepository = require('../repository/operations.repository');

router.get('/', async (req, res) => {
    try {
        const operations = await operationRepository.getAllOperations();
        res.json(operations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
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
