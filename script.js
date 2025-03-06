window.onload = function()
{
    taulaCognoms();
}

async function taulaCognoms() 
{
    let respostaFetch = await fetch("2024_pad_m_cognom.json")   

    let data = await respostaFetch.json();

    let body = document.querySelector("body");
    let taulaJSON = document.createElement("table");
    taulaJSON.classList.add("taulaJSON")

    let titol = document.createElement("tr");
    titol.classList.add("titol")

    let titolDataReferencia = document.createElement("th");
    titolDataReferencia.innerHTML="DATA REFERENCIA";
    titolDataReferencia.classList.add("titolDataReferencia")
    titol.append(titolDataReferencia);

    let titolCognom = document.createElement("th");
    titolCognom.innerHTML="COGNOM"
    titolCognom.classList.add("titolCognom")
    titol.append(titolCognom);

    let titolValor = document.createElement("th");
    titolValor.innerHTML="VALOR"
    titolValor.classList.add("titolValor")
    titol.append(titolValor);

    let titolOrdreCognom = document.createElement("th");
    titolOrdreCognom.innerHTML="ORDRE COGNOM"
    titolOrdreCognom.classList.add("titolOrdreCognom")
    titol.append(titolOrdreCognom);

    taulaJSON.append(titol)

    for (let item of data) 
    {
        let fila = document.createElement("tr");
        fila.classList.add("fila")
        taulaJSON.append(fila)

        let dataReferencia = document.createElement("td");
        dataReferencia.classList.add("dataReferencia");
        dataReferencia.innerHTML=item.Data_Referencia;                          
        fila.append(dataReferencia)

        let cognom = document.createElement("td");
        cognom.classList.add("cognom");
        cognom.innerHTML=item.COGNOM; 
        fila.append(cognom)

        let valor = document.createElement("td");
        valor.classList.add("valor");
        valor.innerHTML=item.Valor;
        fila.append(valor)

        let ordreCognom = document.createElement("td");
        ordreCognom.classList.add("ordreCognom");
        ordreCognom.innerHTML=item.ORDRE_COGNOM;
        fila.append(ordreCognom)        
    }
    console.log("Hola")
    body.append(taulaJSON)
}