//se cragan dependencias para crear las rutas
var express = require('express'),
router = express.Router();

//se cargan los controladores
var homeController = require('../controllers/home');
var imageController = require('../controllers/image');


module.exports = function(app){
    //se empaquetan las rutas usando el objeto router
    router.get('/', homeController.index);
    router.get('/home', homeController.index);
    router.get('/home/index', homeController.index); // index de home
    router.get('/images/index/:image_id', imageController.index); // el index me muestra la imagen
    router.post('/images/create', imageController.create);
    router.post('/images/like/:image_id', imageController.like);
    router.post('/images/comment/:image_id', imageController.comment);

    //cargando las rutas empaquetadas a la aplicacion
    app.use(router);
    return app;
};