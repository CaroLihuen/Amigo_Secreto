// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/**
 *  1-  Agregar nombres en una lista y que estós aparezcan en la pantalla
 *  2- Validación: que solo se agreguen nombres y no solo nada ni números extrañós u otra cosa
 *  3- Sorteo: al clickear el botón te devuelve un amigo aleatorio y que aparezca en pantalla =>
 *   El amigo secreto sorteado es: NombredelAmigo
 */

let lista = ["María","Lautaro","Damian","Laura","Fernanda"]

function Sorteo() {
    let amigo = Math.floor(Math.random() *lista.length)
    console.log(lista[amigo])
    return lista[amigo]
}

Sorteo()