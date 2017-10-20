
// Controlador Home
module.exports = {
    //Action Methods -- funciones que estan dentro del objeto
    index : (erq,res) =>{
        //creando el view model
        var viewModel = {
            images : [
                {
                    uniqueId: 1,
                    title: "Imagen Asombrosa",
                    description: "Descripcion Asombrosa 1",
                    filename: "sample.jpg",
                    views: 0,
                    likes: 0,
                    timestamp: Date.now()
                },
                {
                    uniqueId: 2,
                    title: "Imagen Asombrosa",
                    description: "Descripcion Asombrosa 2",
                    filename: "sample.jpg",
                    views: 0,
                    likes: 0,
                    timestamp: Date.now()
                },
                {
                    uniqueId: 3,
                    title: "Imagen Asombrosa",
                    description: "Descripcion Asombrosa 3",
                    filename: "sample.jpg",
                    views: 0,
                    likes: 0,
                    timestamp: Date.now()
                },
                {
                    uniqueId: 4,
                    title: "Imagen Asombrosa",
                    description: "Descripcion Asombrosa 4",
                    filename: "sample.jpg",
                    views: 0,
                    likes: 0,
                    timestamp: Date.now()
                },
            ]
        };
        res.render('index',viewModel);
    }
};