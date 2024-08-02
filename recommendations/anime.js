document.addEventListener('DOMContentLoaded', () => {
    const genres = document.querySelectorAll('.genres input');
    const deselectAllBtn = document.getElementById('deselect-all');
    const sortHighestBtn = document.getElementById('sort-highest');
    const sortLowestBtn = document.getElementById('sort-lowest');
    const sortAZBtn = document.getElementById('sort-az');
    const sortZABtn = document.getElementById('sort-za');
    const animeList = document.querySelector('.anime-list');

    const animes = [
        {
            name: "Attack on Titan",
            image: "../images/anime/AOT.png",
            genres: ["Action", "Drama", "Fantasy"],
            rating: 9,
            review: "Solid show built up over the course of numerous seasons. The action goes hard and the deaths go even harder. Easy to recommend however not suited for those who dislike violence and lots of blood. It gets pretty gruesome. "
        },
        {
            name: "Dragon Ball Z",
            image: "../images/anime/dragon_ball_z.jpg",
            genres: ["Action", "Shounen"],
            rating: 8,
            review: "Cha la head cha la. Dragon Ball, Dragon Ball Z, and Dragon Ball Super are all easy shows to binge. The original Z is quite long however watching Z Kai is a great alternative if you don't want to watch Goku charge a spirit bomb for 30 episodes. Really solid show and easy to recommend. Also, it's literally Goku. "
        },
        {
            name: "Rascal Does Not Dream of Bunny Girl Senpai",
            image: "../images/anime/bunny_girl_senpai.jpg",
            genres: ["Romance", "Psychological", "Slice of Life"],
            rating: 9,
            review: "A touching story of love, music, and overcoming trauma."
        },
        // Add more anime objects here
    ];

    function displayAnimes(animeArray) {
        animeList.innerHTML = "";
        animeArray.forEach(anime => {
            const animeItem = document.createElement('div');
            animeItem.classList.add('anime-item');
            animeItem.innerHTML = `
                <img src="${anime.image}" alt="${anime.name}">
                <h3>${anime.name}</h3>
                <div class="genres">Genres: ${anime.genres.join(', ')}</div>
                <div class="rating">Rating: ${anime.rating}/10</div>
                <div class="review">${anime.review}</div>
            `;
            animeList.appendChild(animeItem);
        });
    }

    function filterAnimes() {
        const selectedGenres = Array.from(genres).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
        if (selectedGenres.length === 0) {
            displayAnimes(animes);
            return;
        }
        const filteredAnimes = animes.filter(anime => selectedGenres.some(genre => anime.genres.includes(genre)));
        displayAnimes(filteredAnimes);
    }

    function sortAnimesByRating(order) {
        const sortedAnimes = [...animes].sort((a, b) => order === 'highest' ? b.rating - a.rating : a.rating - b.rating);
        displayAnimes(sortedAnimes);
    }

    function sortAnimesByName(order) {
        const sortedAnimes = [...animes].sort((a, b) => order === 'az' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
        displayAnimes(sortedAnimes);
    }

    function deselectAllGenres() {
        genres.forEach(checkbox => checkbox.checked = false);
        displayAnimes(animes);
    }

    genres.forEach(checkbox => checkbox.addEventListener('change', filterAnimes));
    sortHighestBtn.addEventListener('click', () => sortAnimesByRating('highest'));
    sortLowestBtn.addEventListener('click', () => sortAnimesByRating('lowest'));
    sortAZBtn.addEventListener('click', () => sortAnimesByName('az'));
    sortZABtn.addEventListener('click', () => sortAnimesByName('za'));
    deselectAllBtn.addEventListener('click', deselectAllGenres);

    displayAnimes(animes); // Initial display
});
