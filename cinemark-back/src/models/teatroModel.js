
const pool = require('../config/database');
const modelGenerico = require('./modelGenerico');

async function obtenerPorCiudadId(idCiudad) {
    return await pool.query('SELECT * FROM teatros WHERE id_ciudad = ?', [idCiudad]);
}




module.exports = {
    obtenerPorCiudadId
}