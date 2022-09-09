

let Nota1 = Number(prompt("Digite uma nota"))
let Nota2 = Number(prompt("Digite uma nota"))
let Nota3 = Number(prompt("Digite uma nota"))

let Letra = prompt("A -  média aritmética // P - média ponderada")

Calculator(Letra)

function Calculator(letra){
    if(letra == "A"){
        let mediaA = (Nota1 + Nota2 + Nota3) / 3
        return alert(`A média Aritmética dos alunos é ${mediaA}`)
    }

    if(letra == "P"){
        Nota1 = (Nota1 / 0.5)   
        Nota2 = (Nota2 / 0.3)
        Nota3 = (Nota3 / 0.2)

        let mediaP = (Nota1 + Nota2 + Nota3)

        return alert(`A média Ponderada dos alunos é ${mediaP}`)
    }

    else{
        alert("Você digitou um valor inválido dê f5 e tente novamente")
    }
}