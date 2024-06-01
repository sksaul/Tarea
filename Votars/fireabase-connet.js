import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7ns0FQktonAMcsSer75KoiBYSrYH0RXg",
  authDomain: "diego-catalan-09072416823.firebaseapp.com",
  projectId: "diego-catalan-09072416823",
  storageBucket: "diego-catalan-09072416823.appspot.com",
  messagingSenderId: "787726205114",
  appId: "1:787726205114:web:0e682f68d9eb9f62c0c283"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

async function iniciarSesionGoogle() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  auth.languageCode = "es";
  const response = await signInWithPopup(auth, provider);
  const database = getDatabase();
  set(ref(database, 'usuarios/' + response.user.uid), {
    email: response.user.email,
    miniatura: response.user.photoURL
  });
  return response.user;
}

function GuardarVotacion(datos) {
  const database = getDatabase();
  const idVotacion = 'votacion-' + Math.floor(Math.random() * 1000000);
  set(ref(database, 'votaciones/' + idVotacion), {
    nombre: datos.nombre,
    opcion1: datos.opcion1,
    opcion2: datos.opcion2
  });
  return idVotacion;
}

function recuperarVotaciones(callback) {
  const database = getDatabase();
  return onValue(ref(database, '/votaciones/'), (snapshot) => {
    callback(snapshot.val());
  }, {
    onlyOnce: true
  });
}

function verificarVoto(idVotacion, uid, callback) {
  const database = getDatabase();
  return onValue(ref(database, '/votos/' + idVotacion + "/" + uid), (snapshot) => {
    callback(snapshot.val());
  }, {
    onlyOnce: true
  });
}

async function votar(idVotacion, opcion, idUsuario, detalles) {
  const database = getDatabase();
  set(ref(database, 'votos/' + idVotacion + "/" + opcion + "/" + idUsuario), detalles);
  set(ref(database, 'votos/' + idVotacion + "/" + idUsuario), 1);
}

function recuperarVotos(idVotacion, callback) {
  const database = getDatabase();
  return onValue(ref(database, '/votos/' + idVotacion), (snapshot) => {
    callback(snapshot.val());
  });
}

function recuperarVotacion(idVotacion, callback) {
  const database = getDatabase();
  return onValue(ref(database, '/votaciones/' + idVotacion), (snapshot) => {
    callback(snapshot.val());
  }, {
    onlyOnce: true
  });
}

export {
  iniciarSesionGoogle,
  GuardarVotacion,
  recuperarVotaciones,
  verificarVoto,
  votar,
  recuperarVotos,
  recuperarVotacion
};
