// Agrega este código en el archivo scripts.js
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeButton = modal.querySelector('.close');
const projectImage = modal.querySelector('.project-image');
const projectDescription = modal.querySelector('.project-description');

function showProjectDetails(button) {
    const project = button.parentElement;
    const image = project.querySelector('img').src;
    const description = project.querySelector('div').textContent;

    projectImage.src = image;
    projectDescription.textContent = description;

    overlay.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
}

document.querySelectorAll('.show-details').forEach(button => {
    button.addEventListener('click', () => showProjectDetails(button));
});

closeButton.addEventListener('click', closeModal);
