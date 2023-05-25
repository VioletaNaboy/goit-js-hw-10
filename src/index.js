import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const selectEl = document.querySelector('.breed-select');
fetchBreeds();
selectEl.addEventListener('change', event => {
  const selectedBreedId = event.target.value;
  fetchCatByBreed(selectedBreedId);
});
