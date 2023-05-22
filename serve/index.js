const express = require('express')
const conectarBD = require('./config/bd')
const cors=require('cors')
 //crear el servidor

 const app = express()

 //conectar a BD
 conectarBD()
 app.use(express.json())
 app.use(cors())

 //LLamra a las apis
 app.use('/api/users', require('./rutas/usersRutas'))



 //Definir Ruta iicial

 app.get('/',(resq,res)=>
 {
    res.send('El servidor esta activo')
 })//puerto de escicha
  app.listen(3900, ()=>{
    console.log('Servido en ejecucion')
  })
 