

let choice = true
let contador = 0
let MaiorSalario = 0
let AcimaDe1500 = 0

let filhos = []
let wage = []

while(choice){
    filhos[contador] = Number(prompt("Quantos filhos você tem ?"))
    wage[contador] = Number(prompt("Qual o seu salário atual ?"))

    if(wage[contador] > MaiorSalario){
        MaiorSalario = wage[contador]
    }
    
    if(wage[contador] > 1500){
        AcimaDe1500++
    }

    choice = prompt("Deseja inserir mais dados ?")
    if(choice == "Não"){
        choice = false
    }

    contador++
}

Reply()


function Reply(){

    let totalWage = 0
    let totalFilhos = 0
    let Porcemtagem = 0

    for(let index = 0; index < wage.length; index++){
        totalWage = totalWage + wage[index] 
    }
    let mediaWage = (totalWage / contador)


    for(let index = 0; index < filhos.length; index++){
        totalFilhos = totalFilhos + filhos[index]
    }
    let mediaFilhos = parseInt((totalFilhos / contador))

    Porcemtagem = ((AcimaDe1500 / contador) * 100.0)

    return alert(`1- A média salarial da população é ${mediaWage} \n 2- A média de filhos da população é ${mediaFilhos} \n 3- O maior salário foi de ${MaiorSalario} \n 4- ${Porcemtagem}% Das pessoas tem o salário acima de $1500 Reais`)
}