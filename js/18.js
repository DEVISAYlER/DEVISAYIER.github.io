/* 
Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición del puntero respecto del navegador y respecto de la página:


Para mostrar los mensajes, utilizar la función muestraInformacion() deduciendo su funcionamiento a partir de su código fuente.

Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar el nuevo evento y su información asociada:


Añadir la siguiente característica al script: cuando se pulsa un botón del ratón, el color de fondo del cuadro de mensaje debe ser amarillo (#FFFFCC) y cuando se pulsa una tecla, el color de fondo debe ser azul (#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve a ser blanco.
 */
var raton = document.getElementById('raton');
var ratoninfo = raton.getElementsByTagName('div')[0];
var teclado = document.getElementById('teclado');
var tecladoinfo = teclado.getElementsByTagName('div')[0];

function muestraInformacion(event){
    var xnav = window.event.screenX;
    var ynav = window.event.screenY;
    var xpag = window.event.clientX;
    var ypag = window.event.clientY;
    if(event.type == 'mousemove'){
      raton.style.background = '#FFFFFF';
      teclado.style.background = '#FFFFFF';
      ratoninfo.innerHTML = '<br>Navegador [' + xnav + ', ' + ynav + '] <br><br>Pagina [' + xpag + ', ' + ypag + ']';
    }else{
      var charCode = event.keyCode || event.which;
      var charStr = String.fromCharCode(charCode);
      tecladoinfo.innerHTML = '<br>Carácter [' + charStr + '] <br><br>Código [' + charCode + ']';
      teclado.style.background = '#CCE6FF';
    }
    
}

function cambiarColor(){
  raton.style.background = '#FFFFCC';
}

window.onmousemove = muestraInformacion;
window.onkeypress = muestraInformacion;
document.addEventListener('click', function() { cambiarColor()});