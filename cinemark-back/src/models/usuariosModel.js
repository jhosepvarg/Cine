const pool = require('../config/database');
const modelGenerico = require('./modelGenerico');

const model = {};
const nombreTabla = 'usuarios';

model.buscarUsuarioPorCorreo = async (correo) => {
    const sql = `SELECT * FROM usuarios WHERE correo = '${correo}'`;
    return pool.query(sql);
}

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
    return modelGenerico.obtener(nombreTabla);
}



module.exports = model;