import { Request, Response, Router } from "express";
import { cadastroController } from "../useCases/cadastro_usuario/cadastro_controller";
import { cadastroModel } from "../useCases/cadastro_usuario/cadastro_model";

let router_user_register_validation= Router()

router_user_register_validation.post("/usuario/cadastro/validar/", async (req:Request, res:Response)=>{
    const {nome, email, senha, cidade, estado, telefone} = req.body
    let usModel = new cadastroModel( false, nome, senha, email, estado, cidade, telefone)
    console.log(usModel)
    let usController = new cadastroController(usModel)
    usController.salvar()
    res.status(201).send("Dados recebidos")

})
export { router_user_register_validation }