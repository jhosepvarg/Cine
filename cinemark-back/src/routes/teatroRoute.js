const router = require('express').Router();
const controller = require('../controllers/teatroController');

router.get('/list/byCiudad/:idCiudad', controller.obtenerPorCiudadId);


module.exports = router;