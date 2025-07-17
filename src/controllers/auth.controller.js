import * as auth from "../services/auth.service.js"

export const userLogin = async (req, res)=>{
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({message: "Credenciales incompletas"})
        }
        const token = await auth.login(email, password);
        if(token){
            res.status(200).header("Authorization", "Bearer "+token).json({token})
        }else{
            res.status(401).json({message: "Credenciales invalidas"})
        }
    }catch(error){
        console.error("Error al iniciar sesion", error);
        res.status(500).json({message: "Error interno del servidor"})
    }
}

export const userRegister = async (req,res) => {
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({message: "Credenciales incompletas"})
        }
        if(await auth.register(email,password)){
            return res.status(200).json({message: "Cuenta creada con exito"})
        }else{
            return res.status(400).json({message: "Cuenta ya existente"})
        }
    }catch(error){
        console.error("Error al iniciar sesion", error);
        res.status(500).json({message: "Error interno del servidor"})
    }
}
