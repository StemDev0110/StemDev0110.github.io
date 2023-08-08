const botonGitHub = document.getElementById('boton-github');
const botonYouTube = document.getElementById('boton-youtube');
const repoBox = document.querySelector('.repo-box');
const ytBox = document.querySelector('.yt-box');
const videoListContainer = document.querySelector('.video-list');

// Función para activar el botón de GitHub y desactivar el de YouTube
function activarGitHub() {
  botonGitHub.classList.add('active');
  botonYouTube.classList.remove('active');
  repoBox.style.display = 'flex';
  ytBox.style.display = 'none'; // Ocultar yt-box
}

// Función para activar el botón de YouTube y desactivar el de GitHub
function activarYouTube() {
  botonYouTube.classList.add('active');
  botonGitHub.classList.remove('active');
  repoBox.style.display = 'none';
  ytBox.style.display = 'flex';
  fetchVideos();
}

// Evento click para el botón de GitHub
botonGitHub.addEventListener('click', () => {
  if (!botonGitHub.classList.contains('active')) {
    activarGitHub();
  }
});

// Evento click para el botón de YouTube
botonYouTube.addEventListener('click', () => {
  if (!botonYouTube.classList.contains('active')) {
    activarYouTube();
  }
});

// Al cargar la página, activamos el botón de GitHub por defecto
activarGitHub();



//github
function fetchRepos() {
    const url = 'https://api.github.com/users/StemDev0110/repos';
    fetch(url)
      .then(response => response.json())
      .then(data => displayRepos(data))
      .catch(error => console.log(error));
  }
  
  function displayRepos(repos) {
    const repoListContainer = document.querySelector('.repo-list');
    const sortedRepos = repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  
    for (const repo of sortedRepos) {
      const repoContainer = document.createElement('div');
      repoContainer.classList.add('repo-container');
  
      const repoImage = document.createElement('div');
      repoImage.classList.add('repo-image');
      repoImage.style.backgroundImage = `url('${repo.owner.avatar_url}')`;
  
      const repoInfo = document.createElement('div');
      repoInfo.classList.add('repo-info');
  
      const repoName = document.createElement('h3');
      repoName.textContent = repo.name;
  
      const repoDescription = document.createElement('p');
      repoDescription.textContent = repo.description;
  
      const repoStats = document.createElement('div');
      repoStats.classList.add('repo-stats');
  
      const stars = document.createElement('span');
      stars.textContent = `⭐${repo.stargazers_count}   `;
      stars.classList.add('statsrepos')
  
      const forks = document.createElement('span');
      forks.textContent = `🔗${repo.forks_count}    `;
      forks.classList.add('statsrepos')
  
      const views = document.createElement('span');
      views.textContent = `👁‍🗨${repo.watchers_count} `;
      views.classList.add('statsrepos')
  
      repoStats.appendChild(stars);
      repoStats.appendChild(forks);
      repoStats.appendChild(views);
  
      const repoLink = document.createElement('a');
      repoLink.textContent = 'Ver repo';
      repoLink.href = repo.html_url;
      repoLink.target = '_blank';
  
      repoInfo.appendChild(repoName);
      repoInfo.appendChild(repoDescription);
      repoInfo.appendChild(repoStats);
      repoInfo.appendChild(repoLink);
  
      repoContainer.appendChild(repoImage);
      repoContainer.appendChild(repoInfo);
  
      repoListContainer.appendChild(repoContainer);
    }
  }
  
  fetchRepos();
  