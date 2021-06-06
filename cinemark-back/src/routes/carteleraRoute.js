const router = require('express').Router();
const controller = require('../controllers/carteleraController');

router.get('/', controller.obtener);
router.get('/proximas', controller.obtenerProximas);
router.get('/estrenadas', controller.obtenerEstrenadas);




module.exports = router;