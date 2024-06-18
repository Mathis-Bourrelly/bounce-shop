const express = require("express");
const partRepository = require("../repository/parts.repository");
const router = express.Router();

router.get('/:direction/:column/:page?', async (req, res) => {
    const { direction, column, page } = req.params;
    const pageSize = 15;

    const types = req.query.type || '';

    try {
        const parts = await partRepository.getParts(column, direction, page, pageSize, req.query.searchColumn, req.query.searchText, types);
        const partsCount = await partRepository.getPartsCount(req.query.searchColumn, req.query.searchText, types);
        res.send({parts:parts[0],count:partsCount[0][0].count});
        //res.send(parts[0]);
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: e.message });
    }
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