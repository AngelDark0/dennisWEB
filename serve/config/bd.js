const mongoose = require('mongoose')
require('dotenv').config({path:'./variables.env'})
const conectarBD = async()=> {
    try {
        console.log(process.env.BD_MONGO_SHOOP)
        await mongoose.connect(process.env.BD_MONGO_SHOOP,{
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        
        console.log('base conectada')
    } catch (error) {
        console.log(error)
        process.exit(1)// el codigo uno detiene la ejecucin del servidor 
        
    }
}
module.exports=conectarBD