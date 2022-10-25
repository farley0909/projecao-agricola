async function insertUfs(ufs){
   let estadoSelect =  document.getElementById('estado')

 for(let k=0;k<ufs.length;k++){
        let opt =  document.createElement('option')
        opt.value=""+ufs[k].sigla
        opt.innerHTML=""+ufs[k].sigla
        estadoSelect.appendChild(opt)
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
   }
}
export {insertUfs}