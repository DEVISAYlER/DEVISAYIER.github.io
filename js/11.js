/*Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
*Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
*Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().
*Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.*/

//OBJETO PERSONA
function Persona(nombre, edad, genero){
    this.nombre=  nombre;
    this.edad=    edad;
    this.genero=  genero;
    this.metodo1= function obtDetalles(){
      document.write("Nombre: " + this.nombre + "<br>" + 
                     "Edad: " + this.edad + "<br>" + 
                     "Género: " + this.genero + "<br>");
    }; 
  }
    var ficha1 = new Persona("luis","21","masculino");
      ficha1.metodo1();
  
  //OBJETO ESTUDIANTE
  function Estudiante(curso, grupo){
    this.curso=   curso;
    this.grupo=   grupo;
    this.metodo2= function registrar(){
        document.write("Curso: " + this.curso + "<br>" + 
                       "Grupo: " + this.grupo + "<br>");
    };
  }
    var ficha2 = new Estudiante("Programación","Power");
      ficha2.metodo2();
  
  //OBJETO PROFESOR
  function Profesor(asignatura, nivel){
    this.asignatura=  asignatura;
    this.nivel=       nivel;
    this.metodo3=     function asignar(){
        document.write("Asignatura: " + this.asignatura + "<br>" + 
                       "Nivel: " + this.nivel+ "<br>");
    };
  }
    var ficha3 = new Profesor("Html","Básico");
      ficha3.metodo3();
  
  /* ------------------------------------------------------------ */
  
  var datos=[
    { nombre: "corino", apellido: "", },
    { nombre: "ricardo"},
    { nombre: "Paulo"},
    { nombre: "Gian"},
  ];
  
  var container=document.getElementById("contenedor");
  datos.forEach(function(element,index,array){
    var divContenedor=document.createElement("div");
    for(var prop in element){
      var pContenedor = document.createElement("p");
      pContnedor.innerHTML=prop + ":" + element[prop];
      divContenedor.appendChild(pContnedor);
    }
    container.appendChild(divContenedor)
  });