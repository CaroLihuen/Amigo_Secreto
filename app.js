// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/**
 *  1-  Agregar nombres en una lista y que estós aparezcan en la pantalla
 *  2- Validación: que solo se agreguen nombres y no solo nada ni números extrañós u otra cosa
 *  3- Sorteo: al clickear el botón te devuelve un amigo aleatorio y que aparezca en pantalla =>
 *   El amigo secreto sorteado es: NombredelAmigo
 */


const listadeAmigos = []

//Listado de Amigos
function agregarAmigo(){
    let input = document.getElementById("amigo").value
    listadeAmigos.push(input)
    mostrarAmigos(listadeAmigos)
    return listadeAmigos
}

//Muestra los amigos 
function mostrarAmigos(array){
    const lista = document.getElementById("listaAmigos")
    lista.innerHTML = '';
    array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });
}

//Sorteo del Amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado")
    resultado.innerHTML= '';

    let amigo = Math.floor(Math.random() *listadeAmigos.length)
    
    const li = document.createElement("li");
    li.textContent= `Tu amigo sorteado secreto es: ${listadeAmigos[amigo]}!` ;
    resultado.appendChild(li)
}
