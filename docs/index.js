let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
  if (n >= slides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = n;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[currentSlide].style.display = 'block';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

// Mostrar la primera diapositiva al cargar la página
showSlide(currentSlide);

// Puedes agregar más funcionalidades si es necesario