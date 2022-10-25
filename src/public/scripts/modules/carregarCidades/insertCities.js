function insertCities(cities){
   let cidadeSelect = document.getElementById('cidade')
   for(let k=0;k<cities.length;k++){
      let opt = document.createElement('option')
      opt.value=""+cities[k].nome
      opt.innerHTML=""+cities[k].nome
      cidadeSelect.appendChild(opt)
   }
   cidadeSelect.disabled = false
   let instanciaCidade = M.FormSelect.init(cidadeSelect);
}
export {insertCities}