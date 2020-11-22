import galleryItems from "./gallery-items.js"

const imagesRef = document.querySelector('.gallery');

const listImg = galleryItems.map(({ original, preview, description }) => { 

  const imageRefChild = document.createElement('li');
  imageRefChild.classList.add('gallery__item');
    imageRefChild.insertAdjacentHTML('beforeend', `<a class="gallery__link" href='${original}'><img class="gallery__image" 
    src='${preview}' 
    data-source='${original}' 
    alt='${description}'/></a>`);
    return imageRefChild;
    
});
imagesRef.append(...listImg);

const openModal = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
openModal.addEventListener("click", openerModal); 
function openerModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return
  }
  modal.classList.add('is-open');
  const largeImageAlt = event.target.getAttribute('alt')
  const largeImageUrl = event.target.dataset.source;
  const largeImage = document.querySelector('.lightbox__image');
  largeImage.src = largeImageUrl;
  largeImage.alt = largeImageAlt;
}
  
const largeImageclose = document.querySelector('.lightbox__image');
const closeModal = document.querySelector('.lightbox__button');
closeModal.addEventListener("click", closerModal);
function closerModal (){
  modal.classList.remove('is-open');
  largeImageclose.src = "";
  largeImageclose.alt = "";
}


const closeModalClick = document.querySelector('.lightbox__overlay');
closeModalClick.addEventListener("click", closerModal);
window.addEventListener("keydown", keyPress);
function keyPress (event) {
    if(event.key === "Escape") {
        closerModal()
    }
}