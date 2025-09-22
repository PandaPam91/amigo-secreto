# Proyecto Amigo Secreto

Este proyecto es una página web sencilla en **JavaScript** que permite organizar un juego de **Amigo Secreto**.  
Los usuarios pueden ingresar nombres en un campo de texto, mostrarlos en una lista y finalmente **sortear un amigo secreto al azar**.  

---

## Funciones

- **Agregar amigos**:  
  El usuario escribe un nombre en el campo de texto y lo agrega a la lista.  
  - Si el campo está vacío, se muestra un mensaje de error.  
  - El nombre válido se guarda en un **array** y aparece en la lista HTML.  

- **Mostrar la lista de amigos**:  
  Cada vez que se agrega un nombre, la lista se actualiza automáticamente en la pantalla.  

- **Sortear un amigo secreto**:  
  - Se valida que haya al menos un nombre en el array.  
  - Se muestra el nombre sorteado en pantalla.  