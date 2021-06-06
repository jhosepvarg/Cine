const router = require('express').Router();
const controller = require('../controllers/usuariosController');

router.post('/register', controller.crear);
router.post('/login', controller.ingresar);



module.exports = router;