const User= require('../modeL/modelUser')
const bcrypt= require('bcryptjs')
exports.crearUsuarios = async (req,res) => {
    try
    {
        let usuario = req.body
        const hashedPassword= await bcrypt.hash(usuario.contrasenia, 10)
        usuario={...usuario,contrasenia:hashedPassword}
        usuario = new User(usuario)
        await usuario.save()
        res.send(usuario)
    } catch(error)
    {
        console.log(error)
        res.status(500).send('Hubo problemas en el registro del cliente')
    }


}
exports.login = async (req,res) => {
    try
    {
        const {usuario, contrasenia}=req.body
        const usuarios = await User.findOne({usuario})
        if(!usuarios){
            return res.status(404).json({error:'error'})
        }
        const verifyPassword= await bcrypt.compare(contrasenia, usuarios.contrasenia)
        
        if(!verifyPassword){
            return res.status(401).json({error:'error'})
        }

            res.json(usuarios)
        
    } catch(error)
    {
        console.log(error)
        res.status(500).json({error:'error'})
    }
}