import { iniciarSesionGoogle, GuardarVotacion, recuperarVotaciones } from "./fireabase-connet.js";
document.addEventListener("DOMContentLoaded", function() {
    const dialogCrearVotacion = document.getElementById('dialogCrearVotacion');
    const dialogIniciarSesion = document.getElementById('dialogIniciarSesion');
    const dialogVerVotaciones = document.getElementById('dialogVotaciones');

    // Mostrar el diálogo de inicio de sesión al cargar la página
    dialogIniciarSesion.showModal();

    // Manejar el cierre de diálogos al hacer clic fuera de ellos
    window.onclick = function(event) {
        if (event.target === dialogCrearVotacion) {
            dialogCrearVotacion.close();
        }
        if (event.target === dialogVerVotaciones) {
            dialogVerVotaciones.close();
        }
    };

    // Mostrar el diálogo para crear votación
    document.getElementById('btnAbrirVentanaCrear').onclick = function(event) {
        event.preventDefault();
        dialogCrearVotacion.showModal();
    };

    // Mostrar el diálogo para ver votaciones activas
    document.getElementById('btnVerVotaciones').onclick = function(event) {
        event.preventDefault();
        dialogVerVotaciones.showModal();
        recuperarVotaciones(dibujarVotaciones);
    };

    // Manejar el inicio de sesión
    document.getElementById('btnIniciarSesion').onclick = async function(event) {
        event.preventDefault();
        let usuario = await iniciarSesionGoogle();
        if (usuario.email) {
            sessionStorage.setItem('usuario', usuario.email);
            dialogIniciarSesion.close();
        }
    };

    // Crear una nueva votación
    document.getElementById('btnCrearVotacion').onclick = async function(event) {
        event.preventDefault();
        let idVotacion = await GuardarVotacion({
            nombre: document.getElementById('txtNombre').value,
            opcion1: document.getElementById('txtOpcion1').value,
            opcion2: document.getElementById('txtOpcion2').value
        });
        alert(`Votación creada con ID: ${idVotacion}`);
        dialogCrearVotacion.close();
    };

    function dibujarVotaciones(votaciones) {
        const tableVotaciones = document.getElementById('table-votaciones');
        const tbody = tableVotaciones.querySelector('tbody');
        tbody.innerHTML = ''; // Limpiar el contenido existente

        for (const key in votaciones) {
            if (votaciones.hasOwnProperty(key)) {
                const votacion = votaciones[key];
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${key}</td>
                    <td>${votacion.nombre}</td>
                    <td>${votacion.opcion1}</td>
                    <td>${votacion.opcion2}</td>
                    <td><button class="button light-blue" onclick="votar('${key}')">Votar</button></td>
                `;
                tbody.appendChild(tr);
            }
        }
    }

    window.votar = function(idVotacion) {
        alert(`Has votado en la votación con ID: ${idVotacion}`);
    };
});
