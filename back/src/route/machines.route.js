const express = require('express');
const router = express.Router();
const machineRepository = require('../repository/machines.repository');

router.get('/', async (req, res) => {
    try {
        const machines = await machineRepository.getAllMachines();
        res.json(machines);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const machine = await machineRepository.getMachineById(req.params.id);
        if (!machine) {
            return res.status(404).json({ error: 'Machine not found' });
        }
        res.json(machine);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newMachine = await machineRepository.createMachine(req.body);
        res.status(201).json(newMachine);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedMachine = await machineRepository.updateMachine(req.params.id, req.body);
        res.json(updatedMachine);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await machineRepository.deleteMachine(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

exports.initializeRoutes = () => router;
