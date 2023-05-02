var agora = new Date() 
var hora = agora.getHours() //Comando para identificar a hora do sistema

console.log(`Agora são exatamente ${hora} horas.`)
if(hora > 6 && hora < 12 ){
    console.log("Bom dia")
}else if(hora >=12 && hora <=18){
    console.log("Boa Tarde")
}else if(hora <= 23 && hora >=19 ) {
    console.log("Boa noite")
}else if(hora >=1 && hora <=5){ 
    console.log("Boa madrugada")
}else {
    console.log("Hora invalida")
} 


//Observação -> execicio só foi concluido após saber o us o corroto do "&&", anteriormente ocorria erro na sintaxe.
//No curso ensinava um modo mais 'clean' porem só obtive o êxito com pesquisas e alterando o código.