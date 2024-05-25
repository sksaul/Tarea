import { iniciarSesionGoogle, 
          GuardarVotacion,
          recuperarVotaciones
} from "./fireabase-connet.js";

let dialogCrearVotacion = document.getElementById('dialogCrearVotacion');
let dialogIniciarSesion = document.getElementById('dialogIniciarSesion');
let dialogVerVotaciones = document.getElementById('dialogVotaciones');

document.onclick = function (event){
    if (event.target.id === "dialogCrearVotacion"){
        dialogCrearVotacion.close();
    }
   if (event.target.id === "dialogVotaciones") {
        dialogVerVotaciones.close();
    }
}

//se ejecuta cuando se ingrese al documento
document.addEventListener("DOMContentLoaded", function(){
    dialogIniciarSesion.showModal();
})

document.getElementById('btnAbrirVentanaCrear').onclick = function(event){
  //evitamos que se recargue la pagina
    event.preventDefault();
    dialogCrearVotacion.showModal();
}

function dibujarVotaciones(votaciones) {
    const tableVotaciones = document.getElementById('table-votaciones');
    //limpiar tbody
    tableVotaciones.querySelector('tbody').innerHTML = '';
    for (const key in votaciones) {
        const votacion = votaciones[key];
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${key}</td>
            <td>${votacion.nombre}</td>
            <td>${votacion.opcion1}</td>
            <td>${votacion.opcion2}</td>
            <td></td>
            `;
            tableVotaciones.querySelector('tbody').appendChild(tr);
    }
}

document.getElementById('btnVerVotaciones').onclick = function(event){
    event.preventDefault();
    dialogVerVotaciones.showModal();
    recuperarVotaciones(dibujarVotaciones);
}

document.getElementById('btnIniciarSesion').onclick = async function(event) {
    event.preventDefault();
    let usuario = await iniciarSesionGoogle();
    if (usuario.email) {
        //la autenticacion fue correcta.
        sessionStorage.setItem('usuario', usuario.email);
        dialogIniciarSesion.close();
    }
    
}

document.getElementById('btnCrearVotacion').onclick = async function(event){
    event.preventDefault();
    let idVotacion = GuardarVotacion({
        nombre: document.getElementById('txtNombre').value,
        opcion1: document.getElementById('txtOpcion1').value,
        opcion2: document.getElementById('txtOpcion2').value
    })
    alert(idVotacion)
}