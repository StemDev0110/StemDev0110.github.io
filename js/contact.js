// Generar un número aleatorio entre min y max (ambos incluidos)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar una cadena de texto aleatoria para el CAPTCHA
function generateCaptchaText() {
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captchaText = '';
  for (let i = 0; i < 6; i++) {
    captchaText += possibleChars.charAt(getRandomInt(0, possibleChars.length - 1));
  }
  return captchaText;
}

// Función para descifrar un valor en base64
function decodeBase64(value) {
  try {
    const decodedValue = atob(value);
    return decodedValue;
  } catch (error) {
    console.error('Error decoding base64:', error);
    return '';
  }
}

const contactForm = document.getElementById('contact-form');
const captchaInput = document.getElementById('captcha');
const captchaTextSpan = document.getElementById('captcha-text');
let expectedCaptchaText = generateCaptchaText();

// Mostrar el texto del CAPTCHA en el formulario
captchaTextSpan.textContent = expectedCaptchaText;

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  const userCaptchaInput = formData.get('captcha');
  const encodedWebhook = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTEzODQ4OTE4Mjc4OTA2MjgwOC9sUXQxaWdwc29Rdlo1YUx5NEM4UEpRZUR0eWdzTHkyelFfZHN5T2lGdEltcW00cU1FSFJITmpOaWtXQUxhSi1wNnNqQg=='; // Reemplaza con el enlace cifrado

  // Verificar CAPTCHA
  if (userCaptchaInput !== expectedCaptchaText) {
    alert('El texto del CAPTCHA no coincide. Por favor, inténtalo de nuevo.');
    expectedCaptchaText = generateCaptchaText();
    captchaTextSpan.textContent = expectedCaptchaText;
    captchaInput.value = '';
    return;
  }

  // Verificar correo electrónico (con formato personalizado)
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    alert('El correo electrónico debe tener el formato adecuado (ej: ejemplo@dominio.com) y un dominio válido.');
    return;
  }

  // Descifrar enlace de webhook
  const decodedWebhook = decodeBase64(encodedWebhook);

  // Enviar mensaje utilizando el webhook de Discord
  const webhookData = {
    content: `**Nuevo mensaje de contacto:**\nNombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`
  };

  try {
    await fetch(decodedWebhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookData)
    });

    alert('¡Mensaje enviado con éxito!');
    contactForm.reset();

    // Generar un nuevo texto de CAPTCHA después de un envío exitoso
    expectedCaptchaText = generateCaptchaText();
    captchaTextSpan.textContent = expectedCaptchaText;
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    alert('Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
  }
});
