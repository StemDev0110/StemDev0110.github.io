// Función para actualizar una barra de progreso y la bolita
function updateProgressBarAndDot(progressBarElement, targetProgress) {
    const progressBar = progressBarElement.querySelector(".progress-bar");
    const progressDot = progressBarElement.querySelector(".progress-dot");
    const progressText = progressBarElement.querySelector(".progress-text");
    const progressTitleText = progressBarElement.querySelector(".progress-name");
  
    progressBar.style.width = targetProgress + "%";
    progressDot.style.left = targetProgress + "%";
  
    // Ajustar la posición izquierda del texto
    const textOffset = -7; // Ajusta este valor para desplazar el texto más a la izquierda
    progressText.style.left = targetProgress + textOffset + "%";
  
    progressText.textContent = Math.round(targetProgress) + "%";
  
    // Mostrar el nombre de la barra al finalizar la animación del progreso
    if (targetProgress >= targetProgress) {
      progressTitleText.style.display = "block"; // Mostrar el nombre de la barra
    }
  }
  
  // Obtener todas las barras de progreso en el documento
  const progressBarContainers = document.querySelectorAll(".progress-bar-container");
  
  // Simulación de progreso para cada barra de progreso
  const progressDuration = 2000; // Duración en milisegundos para alcanzar el progreso objetivo
  
  progressBarContainers.forEach((container) => {
    const progressBarElement = container.querySelector(".progress-bar");
    const targetProgress = parseInt(progressBarElement.getAttribute("data-progress"), 10);
  
    let startTime;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min((elapsed / progressDuration) * targetProgress, targetProgress);
      updateProgressBarAndDot(container, progress);
  
      if (progress < targetProgress) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  });
  