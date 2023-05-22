const mongoose= require('mongoose')
const Userchema = mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type:String,
        require:true
    },
    usuario:{
        type:String,
        require:true
    },
    contrasenia:{
        type:String,
        require:true
    },
    tipoU:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('users', Userchema)