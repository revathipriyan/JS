const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header').lastElementChild;

const backdrop = document.getElementById('backdrop');

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const entryTextSection = document.getElementById('entry-text');

const userInputs = addMovieModal.querySelectorAll('input');

const movies = [];
const updateUI = () => {
    if(movies.length == 0){
        entryTextSection.style.display = 'block';
    }else{
        entryTextSection.style.display = 'none';
    }
}

const renderNewMovieElement = (title,image,rating) => {
    const NewMovieElement  = document.createElement('li');
    NewMovieElement.className = 'movie-element';
    NewMovieElement.innerHTML = `
    
    <div class = "movie-element_image">
    <img src = "${image}" alt=${title}>
    
    
    </div>

    <div class ="movie-element_info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(NewMovieElement);
};

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
}

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInput();
}

const clearMovieInput = () => {
    for(const inp of userInputs){
        inp.value = '';
    }
}

const backdropClickHandler = () => {
    toggleMovieModal();
}

const addMovieHandler = () => {
    const title = userInputs[0].value;
    const image = userInputs[1].value;
    const rating = userInputs[2].value;
    if (title.trim() == '' || image.trim() == '' || +rating < 1 || +rating > 5){
        alert('Please enter valid values');
        return;
    }
    const newMovie = {
        t: title,
        img : image,
        rate: rating,


    };
    movies.push(newMovie);
    console.log(movies);

    clearMovieInput();
    toggleMovieModal();
    updateUI();
    renderNewMovieElement(title,image,rating);
};


startAddMovieButton.addEventListener('click', toggleMovieModal)
backdrop.addEventListener('click',backdropClickHandler);
cancelAddMovieButton.addEventListener('click',cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click',addMovieHandler);