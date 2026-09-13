let images = document.querySelectorAll('.myfoto img');
let wrappepe = document.querySelector('.wrappepe');
let arrowLeft = document.getElementById('arrowLeft');
let arrowRight = document.getElementById('arrowRight');
let btnClose = document.getElementById('clear');
let box = document.querySelector('.wrappepe div');
let currentIndex;

window.addEventListener('load', function () {
    document.body.classList.add('loaded');

    document.querySelectorAll('.portfolio-img').forEach(function (img, index) {
        img.style.animationDelay = `${index * 120}ms`;
        img.classList.add('portfolio-animate');
    });
});

if (images.length && wrappepe && box) {
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function(e){
            currentIndex = i;
            let imgSrc = e.target.getAttribute('src');
            box.style.backgroundImage = `url(${imgSrc})`;
            wrappepe.classList.remove('d-none');
        });
    }
}

if (arrowRight && images.length && box) {
    arrowRight.addEventListener('click', function(){
        currentIndex++;
        if (currentIndex === images.length) {
            currentIndex = 0;
        }
        let imgSrc = images[currentIndex].getAttribute('src');
        box.style.backgroundImage = `url(${imgSrc})`;
    });
}

if (arrowLeft && images.length && box) {
    arrowLeft.addEventListener('click', function(){
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        let imgSrc = images[currentIndex].getAttribute('src');
        box.style.backgroundImage = `url(${imgSrc})`;
    });
}

if (btnClose && wrappepe) {
    btnClose.addEventListener('click', function(){
        wrappepe.classList.add('d-none');
    });
}

if (wrappepe) {
    wrappepe.addEventListener('click', function(e){
        if (e.target === wrappepe) {
            wrappepe.classList.add('d-none');
        }
    });
}

document.addEventListener('keydown', function (event) {
    if (wrappepe && !wrappepe.classList.contains('d-none')) {
        if (event.key === 'ArrowRight') {
            if (arrowRight && images.length && box) {
                currentIndex = (currentIndex === undefined) ? 0 : currentIndex;
                currentIndex++;
                if (currentIndex === images.length) {
                    currentIndex = 0;
                }
                let imgSrc = images[currentIndex].getAttribute('src');
                box.style.backgroundImage = `url(${imgSrc})`;
            }
        }

        if (event.key === 'ArrowLeft') {
            if (arrowLeft && images.length && box) {
                currentIndex = (currentIndex === undefined) ? 0 : currentIndex;
                currentIndex--;
                if (currentIndex < 0) {
                    currentIndex = images.length - 1;
                }
                let imgSrc = images[currentIndex].getAttribute('src');
                box.style.backgroundImage = `url(${imgSrc})`;
            }
        }

        if (event.key === 'Escape') {
            wrappepe.classList.add('d-none');
        }
    }
});

