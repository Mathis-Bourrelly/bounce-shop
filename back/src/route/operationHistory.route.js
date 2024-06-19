const express = require('express');
const router = express.Router();
const operationHistoryRepository = require('../repository/operationHistory.repository');

router.get('/', async (req, res) => {
    try {
        const operationHistories = await operationHistoryRepository.getAllOperationHistories();
        res.json(operationHistories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:operationID/:rangeID', async (req, res) => {
    try {
        const operationHistory = await operationHistoryRepository.getOperationHistoryById(req.params.operationID, req.params.rangeID);
        if (!operationHistory) {
            return res.status(404).json({ error: 'OperationHistory not found' });
        }
        res.json(operationHistory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newOperationHistory = await operationHistoryRepository.createOperationHistory(req.body);
        res.status(201).json(newOperationHistory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:operationID/:rangeID', async (req, res) => {
    try {
        const updatedOperationHistory = await operationHistoryRepository.updateOperationHistory(req.params.operationID, req.params.rangeID, req.body);
        res.json(updatedOperationHistory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:operationID/:rangeID', async (req, res) => {
    try {
        await operationHistoryRepository.deleteOperationHistory(req.params.operationID, req.params.rangeID);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

exports.initializeRoutes = () => router;
