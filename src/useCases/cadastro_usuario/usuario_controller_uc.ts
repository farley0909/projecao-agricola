import { prisma } from "../connection/factory"
import { usuarioModel } from "./usuario_model_uc"
import nodemailer from 'nodemailer'

export class usuarioController{
   
    constructor(private usModel:usuarioModel){}
    async salvar(){
       try {
        let usuario = await prisma.usuarios.create({
            data:{
                id:this.usModel.getId(),
                email:this.usModel.getEmail(),
                senha: await this.usModel.getSenha(),
                nome: this.usModel.getNome(),
                cidade: this.usModel.getCidade(),
                estado: this.usModel.getEstado(),
                telefone: this.usModel.getTelefone(),
                conta_Ativa: this.usModel.getConta_Ativa()
            }
        })
       // await this.sendEmail()
       } catch (error) {
         throw new Error("Houve um erro ao salvar o usuário! "+error.message)
       }
    }

    async sendEmail(){   
    }
    
}