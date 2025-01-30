const listadeAmigos = []

//Listado de Amigos
function agregarAmigo(){
    const input = document.getElementById("amigo")//.value
    const agregado = input.value
    if(agregado === ''){
        return alert('Tiene que colocar el nombre de un amigo')
      } else if(!isNaN(agregado) && agregado.trim() !== ""){
        return alert('El amigo no puede contener números')
      }
    input.value = ''
    listadeAmigos.push(agregado)
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

    const amigo = Math.floor(Math.random() *listadeAmigos.length)
    
    const li = document.createElement("li");
    li.textContent= `Tu amigo sorteado secreto es: ${listadeAmigos[amigo]}!` ;
    resultado.appendChild(li)
}
