const express = require('express');
const router = express.Router();
const rangeRepository = require('../repository/ranges.repository');

// Récupérer toutes les ranges
router.get('/', async (req, res) => {
    try {
        const ranges = await rangeRepository.getAllRanges();
        res.json(ranges);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Récupérer une range par ID
router.get('/:id', async (req, res) => {
    try {
        const range = await rangeRepository.getRangeById(req.params.id);
        if (!range) {
            return res.status(404).json({ error: 'Range not found' });
        }
        res.json(range);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Créer une nouvelle range
router.post('/', async (req, res) => {
    try {
        const newRange = await rangeRepository.createRange(req.body);
        res.status(201).json(newRange);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Mettre à jour une range existante
router.put('/:id', async (req, res) => {
    try {
        const updatedRange = await rangeRepository.updateRange(req.params.id, req.body);
        res.json(updatedRange);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Supprimer une range par ID
router.delete('/:id', async (req, res) => {
    try {
        await rangeRepository.deleteRange(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

exports.initializeRoutes = () => router;
