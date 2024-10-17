let mostrarRespuesta = document.getElementById("respuesta");
let imagenUrl = document.getElementById("imagenUrl");
let pregunta = document.getElementById("pregunta");

const responder = async (e) => {
    e.preventDefault()
  try {
    const response = await fetch("https://yesno.wtf/api");
    console.log(response);
    const data = await response.json();

    mostrarRespuesta.textContent = data.answer;
    imagenUrl.src = data.image;
  } catch (error) {
    console.log(error);
    alert(
      "Se ha interrumpido la conexxion con el servidor y no se puede obtener la frase"
    );
  }
};

