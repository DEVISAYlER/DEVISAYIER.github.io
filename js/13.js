
function readIn() {
  return document.getElementById('in1').value;
}


/* EJ1 */
send1.addEventListener('click', () => {
  let valid = validDate(readIn());
  if (valid) {
    result.innerHTML += '<p>> La cadena ingresada contiene una fecha (dd/mm/aaaa)</p>';
  } else {
    result.innerHTML += '<p>> La cadena ingresada <strong>NO</strong> contiene una fecha (dd/mm/aaaa)</p>';
  }
});

/** Validar que una cadena tenga una fecha*/
function validDate(t) {
  result.innerHTML += '<p>> Se ingresó: \"' + t + '\"</p>';
  let arrayText = t.split(' ');
  for (i in arrayText) {
    if (/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(arrayText[i]))
    return true;
  }
  return false;
}


/* EJ 2 */
send2.addEventListener('click', () => {
  let mail = readIn();
  result.innerHTML += '<p>> Se ingresó: \"' + mail + '\"</p>';
  if (/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(mail))
  result.innerHTML += '<p>> Se ingresó formato de email correcto</p>';else

  result.innerHTML += '<p>> <strong>NO</strong> se ingresó formato de email correcto</p>';
});



/* EJ 4 */
send4.addEventListener('click', () => {
  let input = readIn();
  result.innerHTML += '<p>> Se ingresó: ' + input + '</p>';
  if (/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(input)) {
    let array = input.split(' ');
    let output = '';
    for (let i = array.length - 1; i >= 0; i--) {if (window.CP.shouldStopExecution(0)) break;
      if (i == array.length - 1)
      output = array[i] + ', ';else

      output += array[i];
    }window.CP.exitedLoop(0);
    result.innerHTML += '<p>> ' + output + '</p>';
  } else {
    result.innerHTML += '<p>> No se ingreso \"Nombre Apellido\"</p>';
  }
});