import {emptyEstado} from './emptyEstado.js'
import {cleanWarnning} from './emptyEstado.js'
import { getCities } from './getCities.js';
import { insertCities } from './showCities.js';
function hasCity(){
        let elems = document.querySelectorAll('select');
        let instances = M.FormSelect.getInstance(cidade);  

    instances.input.addEventListener('click', async ()=>{
        let elems = document.getElementById('estado');
        let instances = M.FormSelect.getInstance(elems);  
        let estadoSelected = instances.input.value
        if(estadoSelected === " "){
            emptyEstado()
        }else{
            cleanWarnning()
            let elems = document.getElementById('estado');
            let instances = M.FormSelect.getInstance(elems);  
            let actualEstado = instances.input.value 
            let res = await getCities(actualEstado)
            insertCities(res)
            hasCity()
        }
       
    })
}
export {hasCity}