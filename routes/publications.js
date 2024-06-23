const express = require('express');
const { publier, getall, getone, update, deleteone} = require('../controllers/publication');
const router = express.Router();

router.post('/', publier);
router.get('/', getall);
router.get('/:id', getone);
router.put('/:id', update);
router.delete('/:id', deleteone);
module.exports = router;