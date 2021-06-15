const btnPrev = document.querySelector("#carousel-button-previous")
const btnNext = document.querySelector("#carousel-button-next")
const slides = document.querySelectorAll(".carousel-item")
const dots = document.querySelectorAll(".carousel-dots")

let container = [...dots]
container.forEach((item, index) =>{
    item.addEventListener("click", function(){
        hideAllSlidesAndDots()
        slides[index].classList.add("carousel-item-visible");
        dots[index].classList.add("carousel-dots-active");   
    })
})


//<-----------------other way (DRY)---------------->

// dots[0].addEventListener("click", function() {
//     hideAllSlidesAndDots()
//     slides[0].classList.add("carousel-item-visible");
//     dots[0].classList.add("carousel-dots-active");
// })
// dots[1].addEventListener("click", function() {
//     hideAllSlidesAndDots()
//     slides[1].classList.add("carousel-item-visible");
//     dots[1].classList.add("carousel-dots-active");
// })
// dots[2].addEventListener("click", function() {
//     hideAllSlidesAndDots()
//     slides[2].classList.add("carousel-item-visible");
//     dots[2].classList.add("carousel-dots-active");
// })
// dots[3].addEventListener("click", function() {
//     hideAllSlidesAndDots()
//     slides[3].classList.add("carousel-item-visible");
//     dots[3].classList.add("carousel-dots-active");
// })
// dots[4].addEventListener("click", function() {
//     hideAllSlidesAndDots()
//     slides[4].classList.add("carousel-item-visible");
//     dots[4].classList.add("carousel-dots-active");
// })
// dots[5].addEventListener("click", function() {
//     hideAllSlidesAndDots()
//     slides[5].classList.add("carousel-item-visible");
//     dots[5].classList.add("carousel-dots-active");
// })
// dots[6].addEventListener("click", function() {
//     hideAllSlidesAndDots()
//     slides[6].classList.add("carousel-item-visible");
//     dots[6].classList.add("carousel-dots-active");
// })

let slidePosition = 0
let totalSlides = slides.length

btnNext.addEventListener("click", nextSlide)
btnPrev.addEventListener("click", prevSlide)

function hideAllSlidesAndDots(){
    for(let slide of slides){
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
    for(let dot of dots){
        dot.classList.remove("carousel-dots-active")
        dot.classList.add("carousel-dots")
    }
}

function nextSlide(){
    hideAllSlidesAndDots()
    if(slidePosition == totalSlides-1){
        slidePosition = 0
    }else{
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible");
    dots[slidePosition].classList.add("carousel-dots-active");
}

function prevSlide(){
    hideAllSlidesAndDots()
    if(slidePosition == 0){
        slidePosition = slides.length-1;
    }else{
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
    dots[slidePosition].classList.add("carousel-dots-active");
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