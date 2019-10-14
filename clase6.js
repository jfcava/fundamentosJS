var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}
// Se llama 'CLAVE' o 'KEY' a por ejemplo 'nombre' y 'VALUE' a 'Sacha'

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27
}

/* 

*****************************************************
OPCION 1

function imprimirNombreEnMayusculas(nombre) {
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreEnMayusculas(sacha.nombre)
imprimirNombreEnMayusculas(dario.nombre)

*****************************************************
OPCION 2 

function imprimirNombreEnMayusculas(persona) {
  var nombre = persona.nombre.toUpperCase()
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)

*****************************************************
OPCION 3

function imprimirNombreEnMayusculas(persona) {
  console.log(persona.nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)

****************************************************
OPCION 4
****************************************************/

function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })









