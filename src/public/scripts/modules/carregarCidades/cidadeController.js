import { emptyEstado } from "./emptyEstado.js";

import {getCities} from './getCities.js'
async function deleteChild() {
    
    let childs = document.getElementById('cidade')
    let insta = M.FormSelect.getInstance(childs);
    insta.destroy()
    childs.innerHTML=" "
    let ins =  M.FormSelect.init(childs); 
}

let cont = 0
function cidadeController(){
    console.log('entrou')
    let cidadesSelector = document.getElementById('cidade');
    let instances = M.FormSelect.init(cidadesSelector);

    instances.input.addEventListener('click',async ()=>{
        deleteChild()
        let elems = document.getElementById('estado');
        let cidadesSelector = document.getElementById('cidade')
        let instances = M.FormSelect.getInstance(elems);  
        let estadoSelected = instances.input.value
        if(estadoSelected === " "){
            emptyEstado()
    
        }else{
            console.log(estadoSelected)
            let res = await getCities(estadoSelected)
            let arr = []
            res.forEach(el => {
                arr.push(el.nome)
            });
            let k = 0
        
            while(k<arr.length){
                let opt= document.createElement("option")
                opt.innerHTML=arr[k]
                cidadesSelector.appendChild(opt)
                k++
            }   
            let cidadeInstance = M.FormSelect.init(cidadesSelector);
           
        }
    })
}


      /*  if(estadoSelected === " "){
            emptyEstado()
            cidadeController()
        }else{
            console.log('entrou')
            cleanWarnning()
         
            
            //for(let k=0;k<res.length;k++){
          //  let opt = document.createElement('option')
          //  opt.value=""+res[k].nome
         //   opt.innerHTML=""+res[k].nome
         //   cidadesSelector.appendChild(opt)
         //   }
            
            let cidadeInstance = M.FormSelect.init(cidadesSelector);   
        }*/
    
  

export {cidadeController}
