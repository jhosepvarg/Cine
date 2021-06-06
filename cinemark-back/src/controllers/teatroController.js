
const model = require('../models/teatroModel');

async function obtenerPorCiudadId(req, res) {
    const idCiudad = req.params.idCiudad;
    const resultados = await model.obtenerPorCiudadId(idCiudad);
    res.json({
        ok: true,
        resultados,
        msg: 'Obtenido exitosamente'
    })
}



module.exports = {
    obtenerPorCiudadId
}