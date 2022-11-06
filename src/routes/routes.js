const router = require('express-promise-router')();
const controler = require('../controllers/rotasControler');


router.get('/', controler.main);
router.get('/historico', controler.historico);
router.get('/grade', controler.grade);


module.exports = router;
