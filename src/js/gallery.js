(() => {
  const refs = {
    openGallerryBtn: document.querySelectorAll('[gallery-open]'),
    closeGalleryBtn: document.querySelector('[gallery-close]'),
    gallery: document.querySelector('[is-gallery]'),
  };
  refs.openGallerryBtn.addEventListener('click', toggleGallery);
  refs.closeGalleryBtn.addEventListener('click', toggleGallery);

  function toggleGallery() {
    refs.gallery.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
$('.carousel').flipster({
  style: 'carousel',
  spacin: -0.3,
  buttons: true,
});
