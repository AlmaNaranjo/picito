//caragndo dependencias
const express = require("express"), 
      path = require("path"),
      config = require("./server/configure");


// creando la instancia de una aplicación
var app = express();

//guardando unas variables de entorno 
app.set('port', process.env.PORT || 3000);
app.set('ip', process.env.IP || '0.0.0.0');

//configurar las rutas de las vistas
app.set('views', path.join(__dirname + '/views'));
//aplicando configuraciones a nuestra App
app = config(app);
// crear las rutas de prueba de la app
app.get('/', (req, res)=>{
//codificado la respuesta
res.send("Adios ITO");
});

//consultar la variables de entorno ra recatar el IP y el PORT
const IP = app.get('ip');
const PORT = app.get('port');
//iniciar el servidor
app.listen(PORT, IP, (err)=>{
   if(err){
       console.log("> Error al iniciar el server");
       throw err;
   }
   console.log(`> Servidor escuchando en http://${IP}:${PORT}`);
});