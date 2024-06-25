// Анимации при скролле
function onEntry(entry) {
    entry.forEach(change => 
    {
    if (change.isIntersecting) 
    {
        change.target.classList.add('show');
    }
    else 
    {
        change.target.classList.remove('show');
    }
    });
}

let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animated');
        
for (let elm of elements) {
    observer.observe(elm);
}

// Слайдер

const leftArrow = document.querySelector('.arrowLeft');
const rightArrow = document.querySelector('.arrowRight');

function sliderRight() {
    let slides = document.getElementsByClassName('slide');

    slides[2].after(slides[0]);

    giveClasses();
}

function sliderLeft() {
    let slides = document.getElementsByClassName('slide');

    slides[0].before(slides[2]);

    giveClasses();
}

function giveClasses() {
    let slides = document.getElementsByClassName('slide');
    let labels = document.getElementsByClassName('side-label');

    for (let slide of slides) {
        slide.classList.remove('slide-is-active');
        slide.classList.add('slide-isnot-active');
    }

    
    slides[1].classList.remove('slide-isnot-active');
    slides[1].classList.add('slide-is-active');

    for (let label of labels) {
        label.classList.remove('slider-left-label');
        label.classList.remove('slider-right-label');
    }

    labels[0].classList.add('slider-left-label');
    labels[2].classList.add('slider-right-label');
}

leftArrow.addEventListener('click', sliderLeft);
rightArrow.addEventListener('click', sliderRight);
