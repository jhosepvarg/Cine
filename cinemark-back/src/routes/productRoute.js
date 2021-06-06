const router = require('express').Router();
const controller = require('../controllers/productosController');

router.get('/list', controller.obtener);
router.get('/list/:id', controller.obtenerPorId);
router.put('/update/:id', controller.editar);
router.post('/create', controller.crear);
router.delete('/delete/:id', controller.eliminar);

module.exports = router;