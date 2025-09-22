// Array para almacenar los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  //Alerta de nombre vacío

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  console.log("📋 Lista actual de amigos:", amigos);

  input.value = "";

   // Función que muestra los amigos en la lista HTML
  mostrarAmigos();
}

function mostrarAmigos() {
  // 1. Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");

  // 2. Limpiar la lista existente
  lista.innerHTML = "";

  // 3. Iterar sobre el arreglo de amigos
  for (let i = 0; i < amigos.length; i++) {
    // 4. Crear un nuevo elemento <li> por cada amigo
    const li = document.createElement("li");
    li.textContent = amigos[i];

    // Agregar el <li> a la lista
    lista.appendChild(li);
  }
}
//Función para sortear el amigo secreto
function sortearAmigo() {
  // 1. Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("⚠️ No hay amigos en la lista para sortear.");
    return;
  }

  // 2. Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // 3. Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // 4. Mostrar el resultado en el HTML
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `🎁 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}



