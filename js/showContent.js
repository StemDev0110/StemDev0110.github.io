function mostrarContenido(contenido) {
    // Ocultar todos los contenidos
    var elementosContenido = document.getElementsByClassName("cuadrado")[0].getElementsByTagName("div");
    for (var i = 0; i < elementosContenido.length; i++) {
      elementosContenido[i].style.display = "none";
    }
    
    // Mostrar el contenido seleccionado
    document.getElementById("contenido-" + contenido).style.display = "block";
  }