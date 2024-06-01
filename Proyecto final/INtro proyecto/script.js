let numero1 = 0;
let numero2;
let total;
console.log(numero1);
function suma(){
numero1 = parseFloat(document.getElementById('numero1').value);
numero2 = parseFloat(document.getElementById('numero2').value);
total = numero1 + numero2;
document.getElementById('resultado').value = total;
}
function resta(){
    numero1 = parseFloat(document.getElementById('numero1').value);
    numero2 = parseFloat(document.getElementById('numero2').value);
    total = numero1 - numero2;
    document.getElementById('resultado').value = total;
}
function division() {
    numero1 = parseFloat(document.getElementById('numero1').value);
    numero2 = parseFloat(document.getElementById('numero2').value);
    if (numero2 !== 0) {
        total = numero1 / numero2;
        document.getElementById('resultado').value = total;
    } else {
        alert("No se puede dividir por cero");
        document.getElementById('resultado').value = "Error";
    }
}
function multiplicacion(){
    numero1 = parseFloat(document.getElementById('numero1').value);
    numero2 = parseFloat(document.getElementById('numero2').value);
    total = numero1 * numero2;
    document.getElementById('resultado').value = total;
}
function limpiar() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultado').value = '';
}