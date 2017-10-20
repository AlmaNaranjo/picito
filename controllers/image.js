
//crga de dependencias
var fs = require('fs'),
    path = require('path');

// Controlador Image
module.exports = {
    // Action Methods
    index : (req, res)=>{

        //creando el view model
        var viewModel = {
            image: {
                uniqueId: 1,
                title: "Imagen Asombrosa",
                description: "Descripcion Asombrosa 1",
                filename: "sample.jpg",
                views: 0,
                likes: 0,
                timestamp: Date.now()
            },
            comments: [
                {
                image_id: 1,
                email: "almaspn95@gmail.com",
                name: "Test Tester",
                gravatar: '510ca4db824011d704fe013c950310a5',
                comment: "Este es un comentario asombroso",
                timestamp: Date.now()
                },
            
                {
                image_id: 1,
                email: "almaspn95@gmail.com",
                name: "Test Tester",
                gravatar: '510ca4db824011d704fe013c950310a5',
                comment: "Este es un comentario asombroso",
                timestamp: Date.now()
                },
            
                {
                image_id: 1,
                email: "almaspn95@gmail.com",
                name: "Test Tester",
                gravatar: '510ca4db824011d704fe013c950310a5',
                comment: "Este es un comentario asombroso",
                timestamp: Date.now()
                },
            
                {
                image_id: 1,
                email: "almaspn95@gmail.com",
                name: "Test Tester",
                gravatar: '510ca4db824011d704fe013c950310a5',
                comment: "Este es un comentario asombroso",
                timestamp: Date.now()
                }
            ]
        };
        res.render('image',viewModel);
    },
    create : (req, res)=>{
        var saveImage = () =>{
            var imgUrl = "";
            var dictionary = "qwertyuiopasdfghjklñzxcvbnm1234567890";
            for (var index = 0; index < 6; index++) {
                imgUrl += dictionary.charAt(Math.floor(
                    Math.random() * dictionary.length
                ));
                
            }
            //rescatar la ruta del archivo cargado
            var temPath = req.files[0].path,
            ext = path.extname(req.files[0].originalname).toLowerCase(),
            targetPath = path.resolve('./public/upload/' + imgUrl + ext);
            //verificar que el archivo tiene una extension valida
            if (
                ext === '.png' ||
                ext === '.jpg' ||
                ext === '.jpeg' ||
                ext === '.gif' ){
                fs.rename(temPath, targetPath, function(err){
                    if(err){
                    console.log("> Error al guardar archivo");
                    throw err;
                }
                //redirecciono a la pagina que visualiza la imagen cargada
                 res.redirect('/images/index/'+ imgUrl);
            });
                }else{
                    //si no es una extension valida se elimina la imagen cargada
                    fs.unlink(temPath, function(err){
                        if(err){
                            console.log("error al borrar una imagen no permitida");
                        }
                        console.log(">Imagen borrada: "+ temPath);
                        res.status(500).json ({
                            error: "solo se permiten archivo de imagen"
                        });
                    });
        }
    };
    saveImage();
    },
    like : (req, res)=>{
        res.send(`> Se ejecuta el metodo <b>like</b> del imageController con el parametro image_id: ${req.params.image_id}`);
    },
    comment : (req, res)=>{
        res.send(`> Se ejecuta el metodo comment del imageController con el parametro image_id: ${req.params.image_id}`);
    }
};