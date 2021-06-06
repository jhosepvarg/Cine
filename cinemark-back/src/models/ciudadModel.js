
const pool = require('../config/database');
const modelGenerico = require('./modelGenerico');

async function obtener() {
    return await modelGenerico.obtener('ciudades');
}




module.exports = {
    obtener
}