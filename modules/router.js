const express = require('express');
const db = require('./db');
const router = express.Router();

router.get('/api/newBoard', (req, res, next) => {
    const data = db.newBoard();
    
    if(data != null){
        res.status(200).json(data).end();
    }
    else{
        res.status(500).json({msg: "Server error"});
    }
})

router.put('/api/moddedBoard', (req, res, next) => {
    const updata = req.body;
    const data = db.getModded(updata.id, updata.change, updata.progress);
    if(data != null){
        res.status(200).json(data).end();
    }
    else{
        res.status(500).json({msg: "Server error"});
    }
})

module.exports = router;