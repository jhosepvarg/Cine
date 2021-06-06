
const pool = require('../config/database');
const modelGenerico = require('./modelGenerico');

async function obtener(req, res) {
    return await modelGenerico.obtener('banners');
}




module.exports = {
    obtener
}