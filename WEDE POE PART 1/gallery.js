const images =
document.querySelectorAll('.gallery-img');
const lightbox =
document.getElementById('lightbox');
const lightboxImage =
document.getElementById('lightboxImage');
images.forEach(image => {
image.addEventListener('click', () => {
lightbox.style.display = "flex";
lightboxImage.src = image.src;
});
});
lightbox.addEventListener('click', () => {
lightbox.style.display = "none";
});