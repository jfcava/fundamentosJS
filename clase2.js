var nombre = 'Sacha', apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` //Otra forma de concatenar strings. Interpolacion de texto

var str = nombre.substr(1, 2) //Accedemos a una fraccion del texto. Un valor para el lugar de inicio, y el segundo valor que cantidad de caracteres.

var ultimaLetraDelNombre = nombre.charAt(nombre.length-1)