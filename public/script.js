function onOff() {
    document
    .querySelector("#modal")
    .classList
    .toggle("hide")
    

    document
    .querySelector("body")
    .classList
    .toggle("hideScroll")

    document
    .querySelector("#modal")
    .classList
    .toggle("addScroll")
}

function checkFields(event ) {
    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]
 const isEmpty = valuesToCheck.find(function(value) {
        //typeof procura o tipo de algo
        // && = e ou || = ou


        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()
            
        console.log(checkIfIsEmpty)
        console.log(checkIfIsString)
   
        if(checkIfIsString && checkIfIsEmpty) {
        return true
    }

 })
    if(isEmpty) { 
        event.preventDefault(); 
        alert("Por favor, preencha todos os campos")
    }

 /*
    for(let value of valuesToCheck) {
        event.target[value].value
    }*/


}












    
 /*chamar função usa () , deixar a função pra ser executada ao clicar "função" 


 é orientado a objetos , quando vc clica em algo, mexe o mouse.... todo objeto tem propriedades 
e funcionalidades 

document = objeto para html , "." da o acesso a esse objeto , 
"onclick" = propriedade/property desse objeto , *write" ou "querySelector" = são metodos/funcionalidades 
/ methods desse objeto 
 query = pesquise 
Selector = no estilo seletor* = qm vc quer achar? querySleector(".fat") mas ele ta onde?
("button.fat) 



Pode fazer uma cadeia de propriedades e metodos no JS , usa"," para adicionar mais valores
ao methodo/propriedade

toggle = colocar e tirar*/

