const mongoose= require('mongoose');
//modelo
const producto=mongoose.Schema({
    nombre_producto:{type: String, required: true},
    precio_unitario:{type: double, required: true},
    cantidad_producto:{type: integer, required: true},
    descripcion:{type:String, required: true}, 
    disponible:{type:boolean, required: true}

})
//exportamos el modelo
module.exports=mongoose.model("products", producto);