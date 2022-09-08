
let value = prompt("Digite um número e veja se ele é Perfeito !")

Verificate(value)

function Verificate(value){
    let contador = 0
    let Total = 0

    for(let index = 1; index < value; index++){

        if(value % index == 0){
            Total = Total + index
            if(Total == value){
                return alert(`${value} É Perfeito!`)
            }
            contador++
        }
    }
}