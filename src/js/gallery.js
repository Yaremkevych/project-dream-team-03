(() => {
  const refs = {
    openGallerry: document.querySelector('[gallery-open]'),
    closeGalleryBtn: document.querySelector('[gallery-close]'),
    gallery: document.querySelector('[is-gallery]'),
  };
  refs.openGallerry.addEventListener('click', toggleGallery);
  refs.closeGalleryBtn.addEventListener('click', toggleGallery);

  function toggleGallery() {
    refs.gallery.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
$('.carousel').flipster({
  style: 'carousel',
  spacin: -0.3,
});
