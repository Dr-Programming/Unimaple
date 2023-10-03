const slides = document.querySelectorAll(".slideshow-home-item");
var slide_counter_home_section = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
);

const slideImage_homeSection = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${slide_counter_home_section*100}%)`
        }
    )
}

const goPrevHomeSection = () => {
    if(slide_counter_home_section == 0){
        slide_counter_home_section = slides.length - 1;
        slideImage_homeSection();
    }else{
        slide_counter_home_section --;
        slideImage_homeSection();
    }
    /*counter--;
    slideImage();*/
}

const goNextHomeSection = () => {
    if(slide_counter_home_section == slides.length - 1){
        slide_counter_home_section = 0;
        slideImage_homeSection();
    } else{
        slide_counter_home_section++;
        slideImage_homeSection();
    }
    /*counter++;
    slideImage();*/
}