// eventos.js
// Obtenemos referencias a los elementos del DOM
const div = document.getElementById("zanahoriasVerdes");
const btnSaludar = document.getElementById("btnSaludar");

// Función que muestra un mensaje de alerta cuando se hace clic en el div
function saludarDiv(){
  window.alert('Hola! Soy el div');
}

// Función que muestra un mensaje de alerta cuando se hace clic en el botón "Saludar"
function saludar(event){
  window.alert('Hola!');
}

// Agregamos un evento al div para que se active cuando se haga clic en él
div.addEventListener("click", saludarDiv);

// Agregamos un evento al botón "Saludar"
btnSaludar.addEventListener("click", (event) => {
  event.stopPropagation(); // Detiene la propagación del evento actual
  saludar(); // Llama a la función saludar
});
