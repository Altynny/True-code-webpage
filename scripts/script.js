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

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    slides[0].style.opacity = "0";
    slides[0].style.transition = "opacity 0.2s ease-in-out";
    slides[1].style.opacity = "0"
    slides[1].style.transition = "opacity 0.2s ease-in-out 0.1";
    slides[2].style.opacity = "0";
    slides[2].style.transition = "opacity 0.2s ease-in-out";

    (async () => {
        await sleep(200);
        slides[0].style.opacity = "1";
        slides[1].style.transition = "opacity 0.1s ease-in-out";
        slides[1].style.opacity = "1";
        slides[2].style.opacity = "1";
        
        slides[0].style.zIndex = '-1';
        slides[2].style.zIndex = '-1';

        slides[2].after(slides[0]);

        giveClasses();

        slides[1].style.zIndex = '0';
    })();
}

function sliderLeft() {
    let slides = document.getElementsByClassName('slide');

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    slides[0].style.opacity = "0";
    slides[0].style.transition = "opacity 0.2s ease-in-out";
    slides[1].style.opacity = "0"
    slides[1].style.transition = "opacity 0.2s ease-in-out 0.1s";
    slides[2].style.opacity = "0";
    slides[2].style.transition = "opacity 0.2s ease-in-out";

    (async () => {
        await sleep(300);
        slides[0].style.opacity = "1";
        slides[1].style.transition = "opacity 0.1s ease-in-out";
        slides[1].style.opacity = "1";
        slides[2].style.opacity = "1";
        
        slides[0].style.zIndex = '-1';
        slides[2].style.zIndex = '-1';

        slides[2].before(slides[0]);

        giveClasses();

        slides[1].style.zIndex = '0';
    })();
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


// Видео слайдер

let videoLeftArrow = document.querySelector('.video-slider-left-arrow');
let videoRightArrow = document.querySelector('.video-slider-right-arrow');

let currentVideo = 0;

images = document.getElementsByClassName('video-slider-video-below');
images[0].style.cssText = `
                outline: 0.3vw darkgreen solid;
                outline-offset: 0.4vw;
                transition: 0.2s ease-in-out;
            `

function videoSliderLeft() {
    currentVideo -= 1;
    if (currentVideo < 0) {
        currentVideo = 2;
    }

    videos = document.getElementsByClassName('video');

    videos[0].before(videos[2]);

    changeImages();
}

function videoSliderRight() {
    currentVideo += 1;
    if (currentVideo > 2) {
        currentVideo = 0;
    }

    videos = document.getElementsByClassName('video');

    videos[2].after(videos[0]);

    changeImages();
}

function changeImages() {
    images = document.getElementsByClassName('video-slider-video-below');
    
    for (let i=0; i<3; i++) {
        if (i == currentVideo) {
            images[i].style.cssText = `
                transition: 0.2s ease-in-out;
                outline: 0.3vw darkgreen solid;
                outline-offset: 0.4vw;
            `;
        }
        else {
            images[i].style.cssText = `
                transition: 0.2s ease-in-out;
                outline: 0vw;
            `;
        }
    }
}

videoLeftArrow.addEventListener('click', videoSliderLeft);
videoRightArrow.addEventListener('click', videoSliderRight);


// События

const events = document.querySelector('.events'); 

function action(select) {
    let allEvents = document.getElementsByClassName('event');
    let img = select.firstElementChild;
    let desc = select.lastElementChild;

    for (let event of allEvents) {
        if (event != select) {
            event.style.cssText = `
                transition: 0.2s ease-in-out;
                opacity: 0.5;
            `
        }

        if (event.firstElementChild.style.width == "18vw") {
            turnBackStyles(event);
            event.style.cssText = `
                transition: 0.2s ease-in-out;
                opacity: 0.5;
            `
            if (event == select) {
                turnBackAllstyles(allEvents);
                return;
            }
        }
    }

    select.style.cssText = `
        transition: 0.2s ease-in-out;
        transform: translateY(-1vw);
    `;

    img.style.cssText = `
        transition: 0.2s ease-in-out;
        width: 18vw;
    `;

    desc.style.cssText = `
        transition: 0.2s ease-in-out;   
        width: 18vw;
        height: 14vw;
    `;

    desc.lastElementChild.style.cssText = `
        transition: 0.2s ease-in-out;
        transform: translate(-8vw, 6vw);
    `;
}

function turnBackStyles(event) {
    event.style.cssText = `
                transition: 0.2s ease-in-out;
                transform: translateY(0vw);
            `

            event.firstElementChild.style.cssText = `
                transition: 0.2s ease-in-out;
                width: 16vw;
            `;
    
            event.lastElementChild.style.cssText = `
                transition: 0.2s ease-in-out;
                width: 16vw;
                height: 12vw;
            `;

            event.lastElementChild.lastElementChild.style.cssText = `
                transition: 0.2s ease-in-out;
                transform: translate(-6vw, 5vw);
             `;
}

function turnBackAllstyles(events) {
    for (let event of events) {
        turnBackStyles(event);
    }
}

events.addEventListener('click', function(event) {
    if (event.target.closest('.event')){
        action(event.target.closest('.event'));
    }
});
