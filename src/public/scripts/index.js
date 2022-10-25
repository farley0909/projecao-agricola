import { cidadeController } from "./modules/carregarCidades/cidadeController.js";
import { getCities } from "./modules/carregarCidades/getCities.js";
import { insertCities } from "./modules/carregarCidades/insertCities.js";
import { getUfs } from "./modules/carregarEstados/getUfs.js";
import { insertUfs } from "./modules/carregarEstados/insertUfs.js";


document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('select');
    let instances = M.FormSelect.init(elems);
    $(document).ready(function(){
        $('.tooltipped').tooltip();
      });
    main()
});


async function main(){
    let ufs =await  getUfs()
    insertUfs(ufs);
    let estadoSelector = document.getElementById("estado")
    let estadoInstance = M.FormSelect.init(estadoSelector); 
    estadoInstance.input.addEventListener('click', ()=>{
       let lis = estadoInstance.dropdown.dropdownEl.childNodes
        for(let k=0;k<lis.length;k++){
              lis[k].removeEventListener('click', eventClick)
        }
        for(let k=0;k<lis.length;k++){
            lis[k].addEventListener('click', eventClick)
        }
    }) 
    let email = document.getElementById('email')
    email.addEventListener('blur', validaEmail)
    let senha = document.getElementById('senha')
    senha.addEventListener('blur', validaSenha)
    let confirmar_senha = document.getElementById('confirmar-senha')
    confirmar_senha.addEventListener('blur', comparaSenha)
    let nome = document.getElementById("nome")
    nome.addEventListener("blur", ()=>{ 
        let nome = document.getElementById("nome")
        if(nome.value.length!==0){
            nome.classList.remove("invalid")
            nome.classList.add("valid")
        }else{
            nome.classList.add("invalid")
        }   
    }) 
    let telefone = document.getElementById("telefone")
    telefone.addEventListener("input", validaTelefone)
    telefone.addEventListener("blur", mascaraTelefone)
}
function mascaraTelefone(){
    
    let telefone = document.getElementById("telefone")
    if(telefone.value.length!=0){
        let dd = telefone.value.slice(0, 2)
        let fbloco = telefone.value.slice(2,7)
        let sbloco = telefone.value.slice(7,11)
        let numFormatado = "("+dd+") "+fbloco+" - "+sbloco
        telefone.value = numFormatado
        console.log(numFormatado)
    } 
    
}
function validaTelefone(){
   const regex =  /^\([1-9]{2}\) [9]{0,1}[6-9]{1}[0-9]{3}\-[0-9]{4}$/gm
   let telefone = document.getElementById("telefone")
   let atualValor =telefone.value.replace(/\D/g, '');
   telefone.value=atualValor
   if(telefone.value.length > 11){
    let str = telefone.value.slice(0,11)
    telefone.value=str
   }
   
}

function validaSenha(){
    let senha = document.getElementById('senha')
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
    if(senha.value.match(regex)===null){
        senha.classList.add("invalid")
        let span = document.getElementsByClassName('password')
        span[0].style.display="block"
        senha.focus()
    }else{
        senha.classList.remove("invalid")
        senha.classList.add('valid')
        let span = document.getElementsByClassName('password')
        span[0].style.display="none"
    }
}

function comparaSenha(){
    let senha = document.getElementById('senha').value
    let senha2 = document.getElementById('confirmar-senha').value
    if(senha !== senha2){
        let senhaAv = document.getElementById("senhaDiff")
        senhaAv.style.display="block"
        let conf = document.getElementById('confirmar-senha')
        conf.classList.add('invalid')
        conf.focus()
    }else{
        let senhaAv = document.getElementById("senhaDiff")
        senhaAv.style.display="none"
        let conf = document.getElementById('confirmar-senha')
        conf.classList.remove('invalid')
        conf.classList.add('valid')
    }
}

function validaEmail(){
    let email = document.getElementById('email')
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if(email.value.match(regex)===null){
        email.classList.add("invalid")
        let elements = document.getElementsByClassName('email warnning');
        elements[0].style.display="block"
        email.focus()
    }else{
        email.classList.remove("invalid")
        email.classList.add('valid')
        let elements = document.getElementsByClassName('email warnning');
        elements[0].style.display="none"
    }

}

async function eventClick(){
    let cidadeSelect = document.getElementById('cidade')
    let cidadeInstance = M.FormSelect.getInstance(cidadeSelect)
    cidadeInstance.destroy()
    cidadeSelect.innerHTML=" "
    let estadoSelect = document.getElementById('estado')
    let instaceEstadoSelect = M.FormSelect.getInstance(estadoSelect);
    let request = await getCities(instaceEstadoSelect.input.value)
    insertCities(request)
}
