const router = require('express-promise-router')();
const controler = require('../controllers/fileControler');


router.get('/', controler.main);
router.get('/historico', controler.historico);


module.exports = router;