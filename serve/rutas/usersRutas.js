const express = require('express')
const usuarioRuta = express.Router()
const userControlador = require('../controller/userController')

//api/users
usuarioRuta.post('/',userControlador.crearUsuarios)
usuarioRuta.post('/login',userControlador.login)



module.exports = usuarioRuta