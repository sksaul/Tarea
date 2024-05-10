console.log("Hola mundo")
//variables 
let miprimeravariable = 10 //number
let miprimerdtring ="Hola" // string o cadena
let miprimerbool = false //bool
let miprimerreal = 10.40 //float o real 
let miprimerarreglo = [1,4,5,6] //array
  {

    "llave":"valor"
    "otra llave": "otro_valor"
    "numero " : 1
  } //objeto

  //cambiar valor de la variable
  miprimeravariable = 15

  //cadena de texto
  let primernombre = "Saul" //camelcase
  let segundoNombre = "Gonzalez"
  //concatenar texto
  let combinado = primernombre + "" +segundoNombre
  console.log(combinado)
  
  //Buscar en texto
  let textolargo = "Hola como estas"
  let indicedehola = textolargo.indexOf("")
  console.log(indicedehola)

  //Tamaño del texto
  console.log(textolargo.length)

  function miPrimerFuction(nombre,mensaje) {
    alert (nombre +" "+mensaje)
  }

  //miPrimerFuction("Saul", "Como estas ?")
  //miPrimerFuction("Pedro", "Como te va?")

  //devuelve un valor
  function sumar (numero1, numero2){
    return numero1 + numero2
  }
let resultado = sumar (10, 20)
console.log(Resultado)
 

//operaciones basicas
// +sumar
//- restar
//multiplicar *
// dividir /
// % modulo (residuo)
// math.pow()

function verificarmayordeedad(edad){
   //comparadores
   // > mayor que
   // <menor que
   // >= mayor o igual que
   // <= menor o igual que
   // == igual
   // ! negacion
   // != diferente de
    if (>= 18)
    console.log("es mayor de edad")
    
}

  function verificarpunteos (punteo1, punteo2){
    // la funcion evalua que solo si el punteo1
    // es mayor a 60 se debe evaluar el otro punteo 
    if (punteo1 > 60){
        console.log("aprobado");
    }
    else{
        console.log("reprobo el punteo 2");
    }
    else{
        console.log("reprobo el punteo 1");
    }
 }

    verificarmayordeedad(18);
    verificarmayordeedad(17);

    verificarpunteos(60,90);

    function promediosinciclosObucles () {
        let alumno1= 30
        let alumno2 = 43
        let alumno3 = 69
        let alumno4 = 24
        let alumno5 = 30
        return (alumno1+alumno2+alumno3+alumno4+alumno5)/5
    }

    function promedioconbucle (){
        let notas = [30,40,69,24,30]
        let acumulador = 0
        // ++ es equivalente  a escribir indice = indice + 1
        for ( let indice=0; indice < notas.length ; indice ++){
            acumulador = acumulador + notas[indice]
        }
        return acumulador / notas.length;
    }
     console.log(promediosinciclosObucles)
     console.log(promedioconbucle)


     function imprimir5veces (mensaje){
        for (let indice=0; indice < 5; indice ++){
            console.log(mensaje)
        }
     }
     imprimir5veces ("Hola desde el bucle");
     

     //API del navegador 
     //alert("Hola")
     //let respuesta = confirm ("estas seguro ?")
     // let datos = prompt ("ingrese su nombre")
     
     //obtener un elemento de html
     let labelnombre = document.getElementById()
     labelnombre.style.backgroundColor = "blue"
     let txnombre = document.getElementById()
     let txtedad = document.getElementById()

     alert ()