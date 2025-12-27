let images = document.querySelectorAll('.myfoto img');
let wrappepe = document.querySelector('.wrappepe');
let arrowLeft = document.getElementById('arrowLeft');
let arrowRight = document.getElementById('arrowRight');
let btnClose = document.getElementById('clear');
let box = document.querySelector('.wrappepe div');
let currentIndex 
// console.log(images);

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function(e){
        currentIndex = i;
        // console.log(e.target);
        let imgSrc = e.target.getAttribute('src');
        box.style.backgroundImage = `url(${imgSrc})`;
        
        wrappepe.classList.remove('d-none');
        
    });
    
}
arrowRight.addEventListener('click', function(){
    console.log('DK');
    
    currentIndex++; 
    if (currentIndex === images.length){
        currentIndex = 0;
    }
    let imgSrc = images[currentIndex].getAttribute('src');
    box.style.backgroundImage = `url(${imgSrc})`;
});
arrowLeft.addEventListener('click', function(){
    console.log('DK');
    
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = images.length -1;
    }
    let imgSrc = images[currentIndex].getAttribute('src');
    box.style.backgroundImage = `url(${imgSrc})`;
}
);
btnClose.addEventListener('click', function(){
    wrappepe.classList.add('d-none');
});
wrappepe.addEventListener('click', function(e){
    
   if (e.target === wrappepe){ 
        wrappepe.classList.add('d-none');
    }
    
});

