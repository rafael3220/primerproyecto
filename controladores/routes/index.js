var express = require('express');
var router = express.Router();
//paso 4 llamamos al archivo indexcontroller y lo declaramos en una variable
let controlFrutas = require('../controllers/indexcontroller');

//paso 5 en la ruta llamo al controlador que quiero utilizar para
//aplicar su logica(sea lo que sea)
router.get('/', controlFrutas.listFrutas);
router.post('/', controlFrutas.guardarFruta);
router.get('/delete/:id_fruta', controlFrutas.deleteFruta);
router.get('/edit/:id_fruta', controlFrutas.editFruta);
router.post('/update/:id_fruta', controlFrutas.updateFruta);




module.exports = router;
