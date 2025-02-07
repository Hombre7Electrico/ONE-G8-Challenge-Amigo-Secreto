/*En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar 
un sorteo aleatorio y determinar quién es el "amigo secreto".
El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista 
visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado
en pantalla.

Fucionalidades:
1- Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en 
"Adicionar".
2- Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
3- Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
4- Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la 
página.*/

//variables
let amigos = [];
let amigoSecreto= [];

//programa principal

//funciones
function agregarAmigo(){
    //amigos.push(document.getElementById('amigo').value);
    //console.log(amigos[amigos.length]);
    //console.log(amigos.length);
    let personaNueva= document.getElementById('amigo').value;

        if (personaNueva.trim() !== '') { //verificar que no este vacio
            amigos.push(personaNueva);
            console.log(amigos[amigos.length-1]);
            console.log(amigos);

            cantidadAmigos= amigos.length;

            lista();
            borrarLabel();
            return;
            
        } else {
            alert('Por favor, coloque un nombre antes de presionar.');
            return;            
        }

}

function sortearAmigo(){

    let sorteo= Math.floor(Math.random()*amigos.length);
    console.log(amigos);
    console.log(sorteo);
    console.log(amigos.length);

    if(amigos.length == amigoSecreto.length){
        let sorteado= document.getElementById('resultado');
        sorteado.innerHTML="";
        alert('Todos los amigos sorteados');
        return; 

    }

    else{

        if(amigoSecreto.includes(sorteo)){

            return sortearAmigo();

        }
        else{
                        //carga en el vector de amigos sorteados
                        amigoSecreto.push(sorteo);
                        //borra el label de resultado
                        let sorteado= document.getElementById('resultado');
                        sorteado.innerHTML="";
                        //reescribe el label de resultado
                        let renglon= document.createElement("li");
                        renglon.textContent= amigos[sorteo];
                        sorteado.appendChild(renglon);
                        return;     

        }
    }
    
}

function borrarLabel(){

    let label= document.getElementById('amigo');
    label.value='';    
    return;
}

function lista(){
    let personas= document.getElementById('listaAmigos');
    personas.innerHTML=""; //limpiar la lista antes de volver a generarla

    amigos.forEach(amigo => { // Iterar sobre el array amigos
        let renglon = document.createElement("li");
        renglon.textContent = amigo; // Usar el valor del array
        personas.appendChild(renglon);
      });   
   


    return;

}