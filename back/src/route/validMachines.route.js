const express = require('express');
const router = express.Router();
const validMachineRepository = require('../repository/validMachines.repository');

router.get('/', async (req, res) => {
    try {
        const validMachines = await validMachineRepository.getAllValidMachines();
        res.json(validMachines);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const validMachine = await validMachineRepository.getValidMachineById(req.params.id);
        if (!validMachine) {
            return res.status(404).json({ error: 'ValidMachine not found' });
        }
        res.json(validMachine);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newValidMachine = await validMachineRepository.createValidMachine(req.body);
        res.status(201).json(newValidMachine);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedValidMachine = await validMachineRepository.updateValidMachine(req.params.id, req.body);
        res.json(updatedValidMachine);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await validMachineRepository.deleteValidMachine(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

exports.initializeRoutes = () => router;
