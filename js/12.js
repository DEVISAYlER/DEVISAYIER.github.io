  function Lanzamiento(x, y) {
    // var table = [];
    // var i;
    // for (i = 0; i < 60; i++) {
    //  x = Math.floor(Math.random()*(5+1)+1);
    //   y = Math.floor(Math.random()*(5+1)+1);
    //   sum = x + y
    //   table.push(sum);
    //}
  
    function Cretable() {
  
      // Obtener la referencia del elemento body
      body = document.getElementById("tabla");
      // Crea un elemento <table>
      tabla = document.createElement("table");
  
      // Crea las celdas
      for (var f = 0; f < 1; f++) {if (window.CP.shouldStopExecution(0)) break;
        // Crea las filas de la tabla
        filas = document.createElement("tr");
  
        for (var c = 0; c < 60; c++) {if (window.CP.shouldStopExecution(1)) break;
          table = [];
          x = Math.floor(Math.random() * (5 + 1) + 1);
          y = Math.floor(Math.random() * (5 + 1) + 1);
          sum = x + y;
          table.push(sum);
  
          // Crea un elemento <td>
          celda = document.createElement("td");
          textcel = document.createTextNode(table);
          celda.appendChild(textcel);
          filas.appendChild(celda);
  
          if (table == 12) {
            celda.style.background = "blue";
          } else if (table == 2) {
            celda.style.background = "red";
          }
        }
  
        // agrega la filas a la tabla
        window.CP.exitedLoop(1);tabla.appendChild(filas);
      }window.CP.exitedLoop(0);
  
      document.getElementById("dice1").innerHTML = x;
      document.getElementById("dice2").innerHTML = y;
      document.getElementById("sum").innerHTML = sum;
      // appends <table> into <body>
      body.appendChild(tabla);
      // modifica el atributo "border" de la tabla y lo fija a "2";
      tabla.setAttribute("border", "2");
    }
  
    Cretable();
  }