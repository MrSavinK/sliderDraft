// Slider
let slideIndex = 1,
slides = document.querySelectorAll('.slider-item'),
prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
dotsWrap = document.querySelector('.slider-dots'),
dots = document.querySelectorAll('.dot');

showSlides(slideIndex);

function showSlides(n) {

if (n > slides.length) {
    slideIndex = 1;
}
if (n < 1) {
    slideIndex = slides.length;
}

slides.forEach((item) => item.style.display = 'none');
// for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
// }
dots.forEach((item) => item.classList.remove('dot-active'));

slides[slideIndex - 1].style.display = 'block';
dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlide(n) {
showSlides(slideIndex +=n);
}
function currentSlide(n) {
showSlides(slideIndex = n);
}
prev.addEventListener('click', function() {
plusSlide(-1);
});

next.addEventListener('click', function() {
plusSlide(1);
});

dotsWrap.addEventListener('click', function(e){ // здесь используем делигирование. Главное проверять потом, что мы используем событие именно уже на дочерних элементах  
for (let i = 0; i < dots.length + 1 ; i++) { // +1 -тк 4 кнопка должна работать
    if (e.target.classList.contains('dot') && e.target == dots[i-1]) { // -1  тк учитываем индекс кнопок(начинаются с 0)
        currentSlide(i);
    }
}
});