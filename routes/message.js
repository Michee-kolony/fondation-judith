const express = require('express');
const { send, getmessage, getonemessage, updatemessage, deletemessage } = require('../controllers/message');
const { getone, deleteone } = require('../controllers/publication');
const router = express.Router();

router.post('/', send);
router.get('/',getmessage);
router.get('/:id', getonemessage);
router.put('/:id', updatemessage);
router.delete('/:id', deletemessage);
module.exports = router;