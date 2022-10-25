function emptyEstado(){
    let elements = document.getElementsByClassName('cidade warnning');
    elements[0].style.display="block"
}

function loadingCities(){
    let ciadae = document.getElementById('cidade')
    cidade.disabled=false
   
}
export {loadingCities}

export {emptyEstado}