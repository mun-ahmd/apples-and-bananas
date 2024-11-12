const galleries = document.querySelectorAll('[data-images]');

function showImage(gallery, index) {
  const images = gallery.dataset.images.split(',');
  const caption = gallery.dataset.captions.split(',')[index];
  const formattedCaption = `${index + 1}/${images.length}: ${caption}`;

  gallery.innerHTML = `
    <img src="${images[index]}" alt="">
    <div class="caption">${formattedCaption}</div>
    <button class="nav-button prev" ${images.length == 1 ? 'hidden' : ''}>&lt;</button>
    <button class="nav-button next" ${images.length == 1 ? 'hidden' : ''}>&gt;</button>
  `;

  const prevButton = gallery.querySelector('.prev');
  const nextButton = gallery.querySelector('.next');

  // Add touch event listeners for mobile devices
  prevButton.addEventListener('click', () => {
    showImage(gallery, (index - 1 + images.length) % images.length);
  });

  nextButton.addEventListener('click', () => {
    showImage(gallery, (index + 1) % images.length);
  });
}

galleries.forEach(gallery => {
  let currentIndex = 0;
  showImage(gallery, currentIndex);
});