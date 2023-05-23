const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', () => {
  const movieListContainer = document.getElementById('movieList');

  fetch('https://api.animewave.ninja/animes')
    .then(response => response.json())
    .then(animes => {
      animes.forEach(anime => {
        const movieListItem = document.createElement('div');
        movieListItem.className = 'movie-list-item';

        const img = document.createElement('img');
        img.className = 'movie-list-item-img';
        img.src = anime.urlImagem;
        img.alt = '';

        const title = document.createElement('span');
        title.className = 'movie-list-item-title';
        title.textContent = anime.titulo;

        const desc = document.createElement('p');
        desc.className = 'movie-list-item-desc';
        desc.textContent = anime.descricao;

        const button = document.createElement('button');
        button.className = 'movie-list-item-button';
        button.textContent = 'Assistir';

        movieListItem.appendChild(img);
        movieListItem.appendChild(title);
        movieListItem.appendChild(desc);
        movieListItem.appendChild(button);

        movieListContainer.appendChild(movieListItem);
      });
    })
    .catch(error => {
      console.error('Ocorreu um erro ao buscar a lista de animes:', error);
    });
});



document.addEventListener('DOMContentLoaded', () => {
  const movieListContainer = document.getElementById('ui');

  fetch('https://api.animewave.ninja/animes')
    .then(response => response.json())
    .then(animes => {
      animes.forEach(anime => {
        const movieListItem = document.createElement('div');
        movieListItem.className = 'movie-list-item';

        const img = document.createElement('img');
        img.className = 'movie-list-item-img';
        img.src = anime.urlImagem;
        img.alt = '';

        const title = document.createElement('span');
        title.className = 'movie-list-item-title';
        title.textContent = anime.titulo;

        const desc = document.createElement('p');
        desc.className = 'movie-list-item-desc';
        desc.textContent = anime.descricao;

        const button = document.createElement('button');
        button.className = 'movie-list-item-button';
        button.textContent = 'Assistir';

        movieListItem.appendChild(img);
        movieListItem.appendChild(title);
        movieListItem.appendChild(desc);
        movieListItem.appendChild(button);

        movieListContainer.appendChild(movieListItem);
      });
    })
    .catch(error => {
      console.error('Ocorreu um erro ao buscar a lista de animes:', error);
    });
});



document.addEventListener('DOMContentLoaded', () => {
  const movieListContainer = document.getElementById('uu');

  fetch('https://api.animewave.ninja/animes')
    .then(response => response.json())
    .then(animes => {
      animes.forEach(anime => {
        const movieListItem = document.createElement('div');
        movieListItem.className = 'movie-list-item';

        const img = document.createElement('img');
        img.className = 'movie-list-item-img';
        img.src = anime.urlImagem;
        img.alt = '';

        const title = document.createElement('span');
        title.className = 'movie-list-item-title';
        title.textContent = anime.titulo;

        const desc = document.createElement('p');
        desc.className = 'movie-list-item-desc';
        desc.textContent = anime.descricao;

        const button = document.createElement('button');
        button.className = 'movie-list-item-button';
        button.textContent = 'Assistir';

        movieListItem.appendChild(img);
        movieListItem.appendChild(title);
        movieListItem.appendChild(desc);
        movieListItem.appendChild(button);

        movieListContainer.appendChild(movieListItem);
      });
    })
    .catch(error => {
      console.error('Ocorreu um erro ao buscar a lista de animes:', error);
    });
});

