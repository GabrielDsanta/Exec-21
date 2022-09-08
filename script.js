

let ProjectName
let budget

let value
let choice

createProject()

Calculator(ProjectName, value, choice, budget)



function createProject(){
    ProjectName = prompt("Qual o nome do seu Projeto ?")
    budget = Number(prompt("Qual o seu Orçamento ?"))
}


function Calculator(ProjectName, value, choice, budget){
    let Continue = true

    while(Continue){
        choice = prompt(`O seu Projeto: ${ProjectName}, Tem um Orçamento Total de: ${budget}, Você deseja adicionar uma Receita ou Despesa ?`)

        if(choice == "Receita"){
         value = Number(prompt("Qual valor você deseja adicionar ao Orçamento ?"))
         if(value < 0){
             alert(`Você inseriu um valor inválido`)
             Continue = true
         }

         budget = budget + value
         choice = prompt("Deseja inserir mais valores ?")

         if(choice == "Não"){
            Continue = false
         }

         else{
            Continue = true
         }
        }
     
        if(choice == "Despesa"){
         value = Number(prompt("Qual o valor da Despesa ?"))
         if(value > budget){
             alert("Você inseriu um valor inválido")
         }

         budget = budget - value
         choice = prompt("Deseja inserir mais valores ?")

         if(choice == "Não"){
            Continue = false
         }

         else{
            Continue = true
         }
        }

        else{
            alert("Opção inválida, Tente denovo")
            Continue = true
        }
    }

   return alert(`O Orçamento final do Projeto: ${ProjectName}, é de ${budget}`)
}

