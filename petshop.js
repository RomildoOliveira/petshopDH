let divPet = document.getElementById("pets");

let listaDeAnimais = [
    {
        tipo: "Cachorro",
        nome:"Lola",
        idade: 13,
        raça:undefined,
        porte: "Médio",
        sexo: "F",
        vacinado:true,
        tutor:{
            nome:"Romildo",
            telefone:"(11)97781-1787"
        }
    },
    {
        tipo:"Cachorro",
        nome:"Mel",
        idade:4,
        raça:undefined,
        porte:"Pequeno",
        sexo:"F",
        vacinado:true,
        tutor:{
            nome:"Romildo",
            telefone:"(11)97781-1787"
        }
    }
];

 const adicionarPet = (tipo, nome, idade, raca, porte, sexo, vacinado, tutor) =>{
    let novoPet = { 
        tipo,
        nome,
        idade:idade,
        raça:raca,
        porte:porte,
        sexo:sexo,
        vacinado:vacinado,
        tutor:{
            nome:tutor,
            telefone:undefined
        }
    }

    listaDeAnimais.push(novoPet);

    console.log("Pet cadastrado com sucesso!")

}


const visualizarPets = () =>{
    for(let i =0; i < listaDeAnimais.length; i++){

        let animal = listaDeAnimais[i]

        let divConteudoPet = document.createElement('div')
        //<div></div>
        divConteudoPet.setAttribute('class','bixinho')

        let pSeparador = document.createElement('p');
        pSeparador.textContent = "------------------------------";

        let pNomeAnimal = document.createElement('p')
        pNomeAnimal.textContent = "Nome do Animal: " + animal.nome
       
        let pTipoAnimal = document.createElement('p')
        pTipoAnimal.textContent = "Tipo de Animal: " + animal.tipo

        divConteudoPet.appendChild(pSeparador)
        divConteudoPet.appendChild(pNomeAnimal)
        divConteudoPet.appendChild(pTipoAnimal)

        divPet.appendChild(divConteudoPet)
        
}
}


const buscarPet =nomePet =>{
    for (let index = 0; index < listaDeAnimais.length; index++) {
        let animal = listaDeAnimais[index];
        
        if(animal.nome == nomePet){
           console.log("Sim existe esse animal cadastrado no sistema.")
           console.log("E suas informações são essas:")
           console.log("------------------------------")
           console.log("Nome do Animal: " + animal.nome)
           console.log("Tipo de Animal: " + animal.tipo)
           console.log("Sexo do Animal: " + animal.sexo)
           console.log("Nome do tutor: " + animal.tutor.nome)
           return
        }
    }

    console.log('Não existe animal cadastrado!')
   
}

/*
const somar = (a,b) => a + b

const buscarPet = nomePet => {}

//sem parametros

const visualizaPet = () +>{

}

//1 paramentro
const visuzalizaPet = valora = >{

}

//2 ou mais parametros
const visualizaPet = (valorA, valorB) =>{

}

//Função de apenas uma liha
const somar = (a,b)=> a+b

//funções com duas linhas ou mais
const somar = (a,b) =>{
    console.log("Estou na soma")
    return a + b
}
*/

function a(){
    console.log("sou a função a")
}

function b (callback){
    console.log("Estou crinando  ")
}