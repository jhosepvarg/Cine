const pool = require('../config/database');
const modelGenerico = require('./modelGenerico');

const model = {};
const nombreTabla = 'productos';

model.crear = (datos) => {
    modelGenerico.crear(nombreTabla, datos);
}

model.editar = (datos, id) => {
    modelGenerico.editar(nombreTabla, datos, id);
}

model.eliminar = (id) => {
    modelGenerico.eliminar(nombreTabla, id);
}

model.obtener = async () => {
    return await modelGenerico.obtener(nombreTabla);
}

model.obtenerPorId = async (id) => {
    const sql = `SELECT *  FROM ${nombreTabla} WHERE id =${id}`;
    return await pool.query(sql);
}

module.exports = model;