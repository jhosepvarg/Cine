
const model = require('../models/carteleraModel');

async function obtener(req, res) {
    const resultados = {
        estrenadas: await model.obtenerEstrenadas(),
        proximas: await model.obtenerProximas(),

    }
    res.json({
        ok: true,
        resultados,
        msg: 'Obtenido exitosamente'
    })
}

async function obtenerProximas(req, res) {
    const resultados = await model.obtenerProximas();
    res.json({
        ok: true,
        resultados,
        msg: 'Obtenido exitosamente'
    })
}

async function obtenerEstrenadas(req, res) {
    const resultados = await model.obtenerEstrenadas();
    res.json({
        ok: true,
        resultados,
        msg: 'Obtenido exitosamente'
    })
}


module.exports = {
    obtener, obtenerEstrenadas, obtenerProximas
}