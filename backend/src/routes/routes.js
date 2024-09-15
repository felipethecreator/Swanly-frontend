const express = require('express');

function searchRoutes(app) {
    
    app.get('/', (req,res) => {
        res.send("Hello, world!");
    })
    
    app.get('/ola', (req, res) => {
        console.log("ouvindo no path /ola");
        res.send("Olá!");
    })
}

module.exports = searchRoutes;