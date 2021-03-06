// cragando dependencias

//* middlewares son funciones intermedias 
var path = require('path'),
exphdb = require('express-handlebars'),
express = require('express'),
bodyParser = require('body-parser'),
cookieParser= require('cookie-parser'),
morgan = require('morgan'),
methodOverride = require('method-override'),
errorHandler = require('errorhandler'),
moment = require('moment'),
multer = require('multer');

//* middlewares son funciones intermedias 
//cragar un modulo perzonalizado
// con las rutas validas de la aplicacion
var routes
 = require('./routes');

module.exports = function(app){
    //Configurando handlebars
    //1. Dar de alta el template engine y configurarlo
    app.engine('.hbs',exphdb.create({
        defaultLayout: 'main',
        extname : 'hbs',
        layoutsDir : path.join(app.get('views'),'layouts'),
        partialsDir: [path.join(app.get('views'),'partials')],
        helpers:{
            timeago: function(timestamp){
                return moment(timestamp).startOf('minutes').fromNow();
            }
        }
    }).engine);

    //2.Asignarlo comoel template engine de trabajo
    app.set('view engine', '.hbs');

    //conectando los Middlewares
    app.use(morgan('dev')); //middelware para login de desarrollo de HTTP
    //Parseo de la URL
    app.use(bodyParser.urlencoded({'extended':true}));
    app.use(bodyParser.json());
     // compatibilidad de verbos HTTP
     app.use(methodOverride());
     //parseo de cookies
     app.use(cookieParser('Algun-valor-secreto'));

     //se habilita la carga de archivos desde el cliente con multipar-use
    app.use(multer({
        dest: path.join(
            __dirname,
            '../public/upload/temp'
        )
    }).any()); 

     // crear las rutas de prueba de la app
     app=routes(app);
     
     //habilitando el servicio estatico de archivos
     app.use('/public/', express.static(path.join(__dirname, '../public')));//path para definir rutas

     //middelware para el manejode errores
     if(app.get('env') === 'develoment'){
         app.use(errorHandler());
     }

return app;
};



