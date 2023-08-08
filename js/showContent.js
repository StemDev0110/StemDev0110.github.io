function mostrarContenido(contenido) {
  // Ocultar todos los contenidos
  var elementosContenido = document.querySelectorAll(".contenido-cuadrado");
  for (var i = 0; i < elementosContenido.length; i++) {
    elementosContenido[i].style.display = "none";
  }

  // Mostrar el contenido seleccionado o el contenido principal si se hace clic en el botón principal
  if (contenido === "principal") {
    document.getElementById("contenido-" + contenido).style.display = "block";
  } else {
    document.getElementById("contenido-principal").style.display = "none";
    document.getElementById("contenido-" + contenido).style.display = "block";
  }
}


function toggleButton() {
  const skillButton = document.getElementById('skillButton')
  const skillButton2 = document.getElementById('skillButton2')

  if  (skillButton.style.display === 'none') {
    skillButton.style.display = 'block';
    skillButton2.style.display = 'none';
  } else {
    skillButton.style.display = 'none';
    skillButton2.style.display = 'block';
  }
}

function mostrarSkills() {
  // Ocultar el contenido anterior el cual es sobre el grafico y ahora se tiene q mostrar los stats
  // Mostrar el contenido de stats si se hace clic en el botón que tiene el nombre alternativo
  const skillButton = document.getElementById('skillButton')
  const skillsgrafic = document.getElementById('skillsgrafic')
  const skillsgrafic2 = document.getElementById('skillsgrafic2')
  if (skillButton.style.display === 'block') {
    skillsgrafic.style.display = "block";
    skillsgrafic2.style.display = "none";
  } else {
    skillsgrafic.style.display = "none";
    skillsgrafic2.style.display = "block";
  }
}
