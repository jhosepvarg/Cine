
const model = require('../models/bannerModel');

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