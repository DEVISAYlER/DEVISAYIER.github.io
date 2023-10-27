/*6.
Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. Para determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador() proporcionada.*/


function tamanoVentanaNavegador(){
    // Adaptada de http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
    var dimensiones = [];
    
    if(typeof(window.innerWidth) == 'number') {
        // No es IE
        dimensiones = [window.innerWidth, window.innerHeight];
    } else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6 en modo estandar (no quirks)
        dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
    } else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE en modo quirks
        dimensiones = [document.body.clientWidth, document.body.clientHeight];

    }
    
    return dimensiones;
}




//box.addEventListener("click",()=>{
// alert('hola');
//});


const tamanio = tamanoVentanaNavegador();
const span = document.getElementsByClassName('posicion')[0];
document.onmouseover=(e)=>{
//console.log(e.x);
let texto="";
if(e.x>tamanio[0]/2 && e.x< tamanio[0]){
texto+=`derecha: ${e.x}`;
}else{
texto+=`Izquierda: ${e.x}`;
}
if ( e.y <tamanio[1]/2 ){
texto+=` Arriba: ${e.y}`;
}else{
texto+=` Abajo: ${e.y}`;
}

span.innerText =texto;
};