
const pool = require('../config/database');

async function obtenerEstrenadas(req, res) {
    const sql = `SELECT id, nombre, descripcion, imagen_principal, DATE_FORMAT(fecha_estreno,'%Y-%m-%d') as fecha_estreno, id_categoria_edad, reparto  FROM peliculas WHERE fecha_estreno <= NOW()`;
    return await pool.query(sql);
}


async function obtenerProximas(req, res) {
    const sql = `SELECT id, nombre, descripcion, imagen_principal, DATE_FORMAT(fecha_estreno,'%Y-%m-%d') as fecha_estreno, id_categoria_edad, reparto  FROM peliculas WHERE fecha_estreno > NOW()`;
    return await pool.query(sql);
}


module.exports = {
    obtenerEstrenadas,
    obtenerProximas
}