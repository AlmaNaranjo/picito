// cotrolador image
module.exports = {
    //Action Methods
    index : (req,res) => {res.send(`>Se ejecuta el metodo index del imageController con el parametro image_id: ${req.params.image_id}`);},
    create : (req,res) => {res.send(`>Se ejecuta el metodo create del imageController.`)},
    like : (req,res) => {res.send(`>Se ejecuta el metodo <b>like</b> del imageController con el parametro image_id: ${req.params.image_id}`);},
    comment : (req,res) => {res.send(`>Se ejecuta el metodo comment del imageController con el parametro image_id: ${req.params.image_id}`);},};