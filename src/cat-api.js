export function fetchBreeds() {
  const loaderEl = document.querySelector('.loader');
  const breedSelect = document.querySelector('.breed-select');
  const errorEl = document.querySelector('.error');
  loaderEl.classList.remove('hidden');
  fetch(
    'https://api.thecatapi.com/v1/breeds?api_key=live_vTVQeZEZDrC4ZGzrH9sSHVBJzcAi8mQtivfVO54yvwjJTeOovBJRpVvIYy6UwNBO '
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      const markup = data
        .map(cat => {
          return `<option value="${cat.id}">${cat.name}</option>`;
        })
        .join('');
      document.querySelector('.breed-select').innerHTML = markup;
      breedSelect.classList.remove('hidden');
      loaderEl.classList.add('hidden');
    })
    .catch(error => {
      error => console.log(error);
      loaderEl.classList.add('hidden');
      errorEl.classList.remove('hidden');
    });
}
export function fetchCatByBreed(selectedBreedId) {
  const loaderEl = document.querySelector('.loader');
  const breedSelect = document.querySelector('.breed-select');
  const errorEl = document.querySelector('.error');
  const infoEl = document.querySelector('.cat-info');
  breedSelect.classList.add('hidden');
  infoEl.classList.add('hidden');
  loaderEl.classList.remove('hidden');
  fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreedId}&api_key=live_vTVQeZEZDrC4ZGzrH9sSHVBJzcAi8mQtivfVO54yvwjJTeOovBJRpVvIYy6UwNBO`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      const description = `<img class="img-select" src="${data[0].url}" alt="${data[0].breeds[0].name}" width="40%"/> <div class="wrapper"><h1 class="title-select" >${data[0].breeds[0].name}</h1> <div class="info-select">${data[0].breeds[0].description}</div> <div class="temperament-select" ><strong>Temperament:</strong> ${data[0].breeds[0].temperament}</div></div>`;
      document.querySelector('.cat-info').innerHTML = description;
      breedSelect.classList.remove('hidden');
      infoEl.classList.remove('hidden');
      loaderEl.classList.add('hidden');
    })
    .catch(error => {
      error => console.log(error);
      loaderEl.classList.add('hidden');
      errorEl.classList.remove('hidden');
    });
}
