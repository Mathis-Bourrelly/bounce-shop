const express = require('express');
const router = express.Router();
const workStationRepository = require('../repository/workStations.repository');

router.get('/', async (req, res) => {
    try {
        const workstations = await workStationRepository.getAllWorkStations();
        res.json(workstations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const workstation = await workStationRepository.getWorkStationById(req.params.id);
        if (!workstation) {
            return res.status(404).json({ error: 'Workstation not found' });
        }
        res.json(workstation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newWorkstation = await workStationRepository.createWorkStation(req.body);
        res.status(201).json(newWorkstation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedWorkstation = await workStationRepository.updateWorkStation(req.params.id, req.body);
        res.json(updatedWorkstation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await workStationRepository.deleteWorkStation(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

exports.initializeRoutes = () => router;
