const cmdTextElements = document.querySelectorAll(".cmd-text");

function typeWriterEffect(element) {
  const text = element.textContent.trim();
  element.textContent = "";

  let index = 0;
  const typingInterval = setInterval(() => {
    element.textContent += text[index];
    index++;
    if (index >= text.length) {
      clearInterval(typingInterval);
    }
  }, 50);
}

function createCursor() {
  const cursorElement = document.createElement("span");
  cursorElement.classList.add("cmd-cursor");
  return cursorElement;
}

function initTypeWriterEffect(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const textElement = entry.target;
      const cursor = createCursor();
      textElement.appendChild(cursor);
      typeWriterEffect(textElement);
      observer.unobserve(textElement);
    }
  });
}

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const textObserver = new IntersectionObserver(initTypeWriterEffect, observerOptions);

cmdTextElements.forEach(element => textObserver.observe(element));


//CMD

const consoleLines = document.querySelectorAll('.console-line');
        const inputField = document.querySelector('.input-field');

        function animateConsoleLines() {
            let i = 0;
            setInterval(() => {
                if (i < consoleLines.length) {
                    consoleLines[i].style.display = 'inline';
                    i++;
                }
            }, 500);
        }

        animateConsoleLines();

        inputField.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                const inputValue = inputField.value;
                const inputLine = document.createElement('span');
                inputLine.classList.add('console-line');
                inputLine.textContent = '> ' + inputValue;

                const consoleContent = document.querySelector('.console-tab-content');
                consoleContent.appendChild(inputLine);

                inputField.value = '';
            }
        });