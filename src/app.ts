//Importando módulos externos
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
//Importando Rotas
import { router_user_register } from './routes/route-cadastro-usuario'
import { router_user_register_validation } from './routes/route-validaCadastro'
//Parte de middlewares
const app = express()
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use(router_user_register)
app.use(router_user_register_validation)
//Exportando app
export {app}