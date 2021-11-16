const express = require('express');
const router = require('./modules/router');
const errorHandler = require('./modules/middleware');
const server = express();
const PORT = process.env.PORT || 8080;
server.set("PORT", PORT);

server.use(express.static('public'));
server.use(express.json());
server.use(router);
server.use(errorHandler);

server.listen(server.get('PORT'), function(){
    console.log("server running", server.get("PORT"));
})