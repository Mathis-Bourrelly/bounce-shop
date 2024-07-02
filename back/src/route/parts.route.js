const express = require("express");
const partRepository = require("../repository/parts.repository");
const {body, validationResult} = require("express-validator");
const router = express.Router();

router.get('/getAll', async (req, res) => {
    try {
        const parts = await partRepository.getAllParts();
        res.send(parts)
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: e.message });
    }
});
router.get('/getByQuery/:direction/:column/:page?', async (req, res) => {
    const { direction, column, page } = req.params;
    const pageSize = 12;
    const { searchColumn, searchText } = req.query;
    let partType = req.query.type || undefined;

    try {
        const parts = await partRepository.getParts(column, direction, page, pageSize, searchColumn, searchText, partType);
        const partsCount = await partRepository.getPartsCount(searchColumn, searchText, partType);
        res.send({ parts: parts[0], count: partsCount[0][0].count });
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: e.message });
    }
});



router.get('/getByID/:id', async (req, res) => {
    let part = await partRepository.getPartById(req.params.id);
    res.send(part);
});

router.get('/search?', async (req, res) => {
    let part = await partRepository.getByString(req.query.term);
    res.send(part);
});

router.get('/getPrevParts/:id', async (req, res) => {
    let part = await partRepository.getPreviousPart(req.params.id);
    res.send(part);
});

router.post('/',
    body('type').not().isEmpty(),
    body('quantity').not().isEmpty().isInt(),
    body('label').not().isEmpty(),
    body('description').not().isEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        let part = await partRepository.createPart(req.body);
    res.send(part);
});

router.post('/previousPart',
    body('partID').not().isEmpty().isInt(),
    body('quantity').not().isEmpty().isInt(),
    body('prevLabel').not().isEmpty(),
    body('mainPartID').not().isEmpty().isInt(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        let previousPart = await partRepository.createPreviousPart(req.body);
    res.send(previousPart);
});


router.post('/prices',
    body('price').not().isEmpty().isFloat(),
    body('date').not().isEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        let newPrice = await partRepository.createPrice(req.body);
        res.send(newPrice);
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