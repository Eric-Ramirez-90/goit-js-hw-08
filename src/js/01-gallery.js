// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// console.log(galleryItems);
// console.log(SimpleLightbox);

const refs = {
  containerForMarkup: document.querySelector('.gallery'),
};

const createElement = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<div class="gallery__item some-element">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');
refs.containerForMarkup.insertAdjacentHTML('beforeend', createElement);

new SimpleLightbox('.some-element a', {
  captionsData: 'alt',
  captionDelay: 250,
  navText: ['⮜', '⮞'],
});
