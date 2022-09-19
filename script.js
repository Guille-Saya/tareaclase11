function diasSemana() {
 //Ejercicio dias de la semana 
let diaSemana = prompt("¿Qué día es hoy?");
switch (diaSemana) {
case "lunes":

alert("Hoy es lunes, y comienza tu semana con caminata de 5 km!!");

break;
case "martes":

alert("Hoy es martes, a subirce a la bicicleta y hacer 10 km !!");

break;
case "miércoles":

alert("Hoy es miércoles, no me aflojes que hoy hacemos 10 km de trote!! ");

break;
case "jueves":

alert("Hoy es jueves, caminata de 7 km y a esperar el finde!!");

break;
case "viernes":

alert("Hoy es viernes, el último empujon, unos ejercicios basicos para relajar los musculos!!");

break;
case "sábado":

alert("Hoy es sábado, muy buena semana de trabajo,para terminar caminata de 5 km y asado a la noche (El permitido)!!");

break;
case "domingo":

alert("Hoy es domingo, relax y a disfrutar de la familia. Nos vemos el lunes!!");

break;
default:

alert("¡¡No entendí...!! ¿Podrías ingresar el día en minúsculas?");

} 
  
} 
function bucleModificado() {
  //Bucle modificado 

for ( i = 20; i <= 70; i++) {
  document.write ("El numero es: " + i + "<br>");
}
}

function holaMundo (){
  //Hola mundo 

let contador = prompt("Ingrese la cantidad de veces que aparecerá la frase: ");
while(contador > 0){
    document.write("Hola mundo!! ", contador,"</br>");
    contador = contador -1
} 
}
