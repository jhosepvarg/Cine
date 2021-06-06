const router = require('express').Router();
const user = require('./userRoute');
const product = require('./productRoute');
const cartelera = require('./carteleraRoute');
const banner = require('./bannerRoute');
const ciudad = require('./ciudadRoute');
const teatro = require('./teatroRoute');




router.use('/auth', user);
router.use('/product', product);
router.use('/cartelera', cartelera);
router.use('/banner', banner);
router.use('/teatro', teatro);
router.use('/ciudad', ciudad);




module.exports = router;


