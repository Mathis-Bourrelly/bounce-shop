const express = require("express");
const partRepository = require("../repository/parts.repository");
const router = express.Router();

router.get('/', async (req, res) => {
    let parts = await partRepository.getAllParts();
    res.send(parts);
});

router.get('/:id', async (req, res) => {
    let part = await partRepository.getPartById(req.params.id);
    res.send(part);
});

router.post('/', async (req, res) => {
    let part = await partRepository.createPart(req.body);
    res.send(part);
});

router.put('/:id', async (req, res) => {
    let part = await partRepository.updatePart(req.params.id);
    res.send(part);
});

router.delete('/:id', async (req, res) => {
    await partRepository.deletePart(req.params.id);
    res.sendStatus(204);
});

exports.initializeRoutes = () => router;