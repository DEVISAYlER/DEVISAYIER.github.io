/*1. 
Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log().*/

var meses= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
console.log(meses);

/*2.
A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
a. Determinar cual de los dos elementos de texto es mayor
b. Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
c. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
*/
//a. Determinar cual de los dos elementos de texto es mayor
 var valores = [true, 5, false, "hola", "adios", 2];

texto1 = valores[3].length;
texto2 =valores[4].length;
if(texto1> texto2){
  console.log(valores[3]);
}else{
  console.log(valores[4]);
}
/*b. Utilizando exclusivamente los dos valores booleanos del array,
determinar los operadores necesarios para obtener un resultado true y otro resultado false*/
if(valores[0] == true || valores[2] ==  false){ //true
  console.log(true);
}else {
  console.log(false);
}

if(valores[0] == false && valores[2] ==  false){ //true
  console.log(true);
}else {
  console.log(false);
}

//c. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
suma  = valores[1] + valores[5];
resta = valores[1] - valores[5];
multi = valores[1] * valores[5];
div = valores[1] / valores[5];
pot = valores[1] ** valores[5];
console.log(suma);
console.log(resta);
console.log(multi);
console.log(div);
console.log(pot);

/*
3.
El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120. Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
*/
n = 5;
a = 1;
for(let i=1 ;i<=n;i++){
  a = (a *i);
}
console.log(a);

/*
4.
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

*/
function  paroimpar(num){
  if(num%2==0){
    return "Es par";
  }else{
    return "Es impar";
  }
}

console.log(paroimpar(10));
console.log(paroimpar(7));

/*
5.
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.
*/
numeros = 0;
var arreglo  =[];
suma =  0;
for( let i=1 ; i <=36000;i++ ){
  numero= Math.round( Math.random()*(6-1)+1);
  suma += numero;
  arreglo.push(numero);
}

console.log(suma);
//alert(arreglo);

/*
6.
Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. Para determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador() proporcionada.

*/

/*

7.Construir un validador para un formulario de registro que, dado el HTML que se proporciona, valide cada uno de los campos cuando el usuario ha terminado de introducir datos en cada uno de ellos, es decir, al perder el foco. Si el campo no cumple las restricciones, se mostrará una alerta al usuario, pero se le permitirá seguir introduciendo datos en el resto de campos.

En el momento en el que el usuario envíe el formulario (evento submit), se validarán todos los campos y el formulario no se enviará si alguno de los campos no es válido. Las restricciones a cumplir son las siguientes:

a. El nombre, email y comentarios son campos obligatorios.
b. El campo email debe ser una dirección de email válida.
c. El texto introducido en el campo de comentarios no debe exceder los 50 caracteres.
d. El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito.


*/

email= document.getElementById('email');
password= document.getElementById('password');
nombre= document.getElementById('nombre');
comentario= document.getElementById('comentario');


registro =document.getElementById('registro');

console.log(email.value);