
const model = require('../models/ciudadModel');

async function obtener(req, res) {
    const resultados = await model.obtener();
    res.json({
        ok: true,
        resultados,
        msg: 'Obtenido exitosamente'
    })
}



module.exports = {
    obtener
}