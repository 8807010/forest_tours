
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const prevIcon = document.querySelector('.bx-chevron-left');
const numberOfSlides = slides.length;
let slideNumber = 0;

//slider next button
nextBtn.onclick = () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
    prevBtn.style.backgroundColor = "#fff";
    prevIcon.style.color = "#444";
  })
  slideNumber++;
  if (slideNumber > (numberOfSlides - 1)) {
    slideNumber = 0;
  }
  slides[slideNumber].classList.add('active');
}

//slider prev button
prevBtn.onclick = () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
    prevBtn.style.backgroundColor = "#fff";
    prevIcon.style.color = "#444";
  })

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add('active');
}
