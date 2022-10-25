
async function getUfs(){
    try {
        let req = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        const res =  req.json()
        return  res
       
    } catch (error) {
        throw new Error("Bad request")
    }
   
}
export {getUfs}