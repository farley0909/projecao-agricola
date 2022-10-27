import { uuid } from 'uuidv4';
import bcrypt from 'bcrypt'
export class cadastroModel{
    private id:string
    constructor(
        private conta_ativa:boolean,
        private nome:string,
        private senha:string,
        private email:string,
        private estado:string,
        private cidade:string,
        private telefone:string,
        id?
    ){
        if(!id){
            this.id = uuid()
        }else{
            this.id =id
        }
    }
    public getConta_Ativa(): boolean{
        return this.conta_ativa
    }
    public setConta_ativa(status:boolean):void{
        this.conta_ativa = status
    }
    public getId():string{
        return this.id
    }
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

    public getCidade(): string{
        return this.cidade;
    }

    public setCidade(cidade: string): void {
        this.cidade = cidade;
    }

    public getTelefone(): string {
        return this.telefone;
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }
    async getSenha():Promise<string>{
        this.senha = await bcrypt.hash(this.senha, 12)
        return this.senha
    }

}