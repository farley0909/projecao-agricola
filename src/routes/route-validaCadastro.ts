import { Request, Response, Router } from "express";
import { usuarioController } from "../useCases/cadastro_usuario/usuario_controller_uc";
import { usuarioModel } from "../useCases/cadastro_usuario/usuario_model_uc";

let router_user_register_validation= Router()

router_user_register_validation.post("/usuario/cadastro/validar/", async (req:Request, res:Response)=>{
    const {nome, email, senha, cidade, estado, telefone} = req.body
    let usModel = new usuarioModel(false, nome, senha, email, estado, cidade, telefone)
    let usController = new usuarioController(usModel)
    usController.salvar()
    res.status(201).send("Dados recebidos")

})
export { router_user_register_validation }