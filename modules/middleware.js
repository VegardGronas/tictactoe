const errorHandler = function(err, req, res, next){
    res.status(500).json({
        error: "something when wrong on the server",
        desc: err
    }).end();
}

module.exports = errorHandler;