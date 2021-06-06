const router = require('express').Router();
const controller = require('../controllers/ciudadController');

router.get('/', controller.obtener);


module.exports = router;