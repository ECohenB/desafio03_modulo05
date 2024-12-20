// Función para obtener y mostrar los posts
async function getPosts() {
    const postContainer = document.getElementById("post-data");
    postContainer.innerHTML = "Cargando..."; // Mostrar mensaje mientras se cargan los datos
  
    // manejo de errores
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  
      // Verificacion de respuesta
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
  
      //  la respuesta se pasa a JSON y se obtiene el objeto
      const posts = await response.json();
  
      // se crea una lista desordenada con los datos obtenidos
      postContainer.innerHTML = `
        <ul>
          ${posts
            .slice(0, 10) // Mostrar solo los primeros 10 posts de la API
            .map(
              (post) =>
                `<li>
                  <strong>${post.title}</strong>
                  <p>${post.body}</p>
                </li>`
            )
            .join("")}
        </ul>`;
    } catch (error) {
      // Manejo de errores
      postContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
      console.error("Error al obtener los posts:", error);
    }
  }
  