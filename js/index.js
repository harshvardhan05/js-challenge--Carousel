const btnPrev = document.querySelector("#carousel-button-previous")
const btnNext = document.querySelector("#carousel-button-next")
const slides = document.querySelectorAll(".carousel-item")

let slidePosition = 0
let totalSlides = slides.length

btnNext.addEventListener("click", nextSlide)
btnPrev.addEventListener("click", prevSlide)

function hideAllSlides(){
    for(let slide of slides){
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}

function nextSlide(){
    hideAllSlides()
    if(slidePosition == totalSlides-1){
        slidePosition = 0
    }else{
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}

function prevSlide(){
    hideAllSlides()
    if(slidePosition == 0){
        slidePosition = slides.length-1;
    }else{
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}








/*
<---------Using if-else ------------------------------------------------->
function nextSlide() {
    if (slidePosition < totalSlides-1) {
        nextSlidePosition = slidePosition + 1
        slides[nextSlidePosition].style.display = "block"
        slides[slidePosition].style.display = "none"
        slidePosition = nextSlidePosition
    }
    else{
        slides[totalSlides-1].style.display = "none"
        slides[0].style.display = "block"
        slidePosition = 0
    }
}

function prevSlide() {
    if(slidePosition == 0){
        slides[totalSlides-1].style.display = "block"
        slides[slidePosition].style.display = "none"
        slidePosition = totalSlides-1;
    }
    else{
        prevSlidePosition = slidePosition - 1;
        slides[prevSlidePosition].style.display = "block"
        slides[slidePosition].style.display = "none"  
        slidePosition = prevSlidePosition;
    }    
}

*/