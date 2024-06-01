//import

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, child, push, update, set, onValue }
  from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

import { getAuth, GoogleAuthProvider, signInWithPopup }
  from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js'

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUv6wbcOCnNhO9xk7tne0VpiXXcIKLj1Q",
    authDomain: "intro2024-88f36.firebaseapp.com",
    projectId: "intro2024-88f36",
    storageBucket: "intro2024-88f36.appspot.com",
    messagingSenderId: "133566039472",
    appId: "1:133566039472:web:651898a9f12a1addd1c275"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  async function iniciarSesionGoogle() {
    //logica de autenticacion
    var auth = getAuth();
    //creamos el proveedor en este caso es google
    var provider = new GoogleAuthProvider();
    auth.language = "es";
    var response = await signInWithPopup(auth, provider);
    console.log(response);
    const database = getDatabase();
    set(ref(database, 'usuarios/' + response.user.uid),{
        email: response.user. email,
        miniatura: response.user.photoURL
    });
    return response.user;
  }

  function GuardarVotacion(datos) {
    const database = getDatabase();
    const idVotacion = 'votacion-' + Math.floor(Math.random() * 1000000);
    set(ref(database, 'votaciones/' + idVotacion),{
      nombre: datos.nombre,
      opcion1: datos.opcion1,
      opcion2: datos.opcion2
    });
    return idVotacion;
  }

  function recuperarVotaciones(callback) {
    const database = getDatabase();
    return onValue (ref(database, '/votaciones/'), (snapshot) => {
      callback (snapshot.val())
    },{
      onlyOnce: true
    });
  }

  function verificarVoto(idVotacion, uid, callback){
    const database = getDatabase();
    return onValue(ref(database, '/votos/' + idVotacion + "/" + uid),(snapshot) => {
      callback(snapshot.val());
    }, {
      onlyOnce: true
    });
  }

  async function votar(idVotacion, opcion, idUsusario,detalles){

    const database = getDatabase();
    set(ref(database, 'votos/' + idVotacion + "/" + opcion + "/" +idUsusario),detalles);
    set(ref(database, 'votos/' + idVotacion + "/" + idUsusario), 1);

  }

  function recuperarVotos(idVotacion, callback){
    const database = getDatabase();
    return onValue (ref(database, '/votos/' + idVotacion), (snapshot) => {
      callback(snapshot.val());
    });
  }
  function recuperarVotacion(idVotacion, callback) {
    const database = getDatabase();
    return onValue(ref(database, '/votaciones/' + idVotacion), (snapshot) => {
        callback(snapshot.val())
    },{
        onlyOnce: true
    });
  }
  export{
    iniciarSesionGoogle,
    GuardarVotacion,
    recuperarVotaciones,
    verificarVoto,
    votar,
    recuperarVotos,
    recuperarVotacion
  }