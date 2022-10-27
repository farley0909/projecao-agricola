import { Router } from "express";
import { cadastroController } from "../useCases/cadastro_usuario/cadastro_controller";
import jwt from 'jsonwebtoken'

let route_confirmar = Router()

route_confirmar.get("/confirmar/:token", async (req, res)=>{
    const token = req.params.token
    let usController =  new cadastroController()
    let users =  await usController.getAlluser()

        try {
            let decodded = jwt.verify(token, process.env.JWT_SECRET);

            users.forEach(async el =>{
                if(el.id == decodded){
                   await usController.activeAccount(el.id)
                   res.status(200)
                   res.send('Conta ativada!')
                   return 0 
                }
            
            })
        } catch (error) {
            res.status(401)
            res.send("Token inválido!")
        }
       
   
})
export {route_confirmar}