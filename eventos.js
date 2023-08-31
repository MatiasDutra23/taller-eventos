const BtnSaludar = document.getElementById("zanahoriasVerdes");

function saludarDiv(){
    window.alert('Hola! Soy el div');
}
function saludar(){
    window.alert('Hola!');
}

BtnSaludar.addEventListener("click", () => {
    saludarDiv();
});
