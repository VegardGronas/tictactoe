const express = require('express');
const db = require('./db');
const router = express.Router();

router.get('/api/newBoard', (req, res, next) => {
    const data = db.newBoard();

    res.status(200).json(data).end();
})

router.put('/api/moddedBoard', (req, res, next) => {
    const updata = req.body;
    const data = db.getModded(updata.id, updata.change, updata.progress);
    res.status(200).json(data).end();
})

module.exports = router;