async function getCities(estadoSelected){
    try {
        const link = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelected}/municipios`
       let request = await fetch(link)
       let res = await request.json()
       
       return res
    } catch (error) {
        throw new Error("Requisição das cidades falhou!")
    }
}






export {getCities}