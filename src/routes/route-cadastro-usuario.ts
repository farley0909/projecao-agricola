import { Request, Response, Router } from "express"
import path from "path"

let router_user_register = Router()

router_user_register.get("/usuario/cadastro/", (req:Request, res:Response)=>{
   res.set({
    'Content-type': 'text/html',
    'StatusCode': '200'
   })
   res.sendFile(path.join(__dirname,'../public/cadastroUsuario.html'))
})
export {router_user_register}

