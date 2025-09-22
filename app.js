// Array para almacenar los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
  // 1. Capturar el valor del campo de entrada
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // 2. Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // 3. Actualizar el array de amigos
  amigos.push(nombre);
  console.log(`✅ Nombre agregado: ${nombre}`);
  console.log("📋 Lista actual de amigos:", amigos);

  // 4. Limpiar el campo de entrada
  input.value = "";
}


