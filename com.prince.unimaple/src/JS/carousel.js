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

/*featured section*/

const slides_featured_section = document.querySelectorAll(".slideshow-featured-item");
var slide_counter_featured_section = 0;

slides_featured_section.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
);

const slideImage_featuredSection = () =>{
    slides_featured_section.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${slide_counter_featured_section*100}%)`
        }
    )
}

const goPrevFeaturedSection = () => {
    console.log("Previous Pressed");
    if(slide_counter_featured_section == 0){
        slide_counter_featured_section = slides_featured_section.length - 1;
        slideImage_featuredSection();
    }else{
        slide_counter_featured_section --;
        slideImage_featuredSection();
    }
    /*counter--;
    slideImage();*/
}

const goNextFeaturedSection = () => {
    console.log("Next Pressed");
    if(slide_counter_featured_section == slides_featured_section.length - 1){
        console.log("oii");
        slide_counter_featured_section = 0;
        slideImage_featuredSection();
    } else{
        console.log("heyy");
        slide_counter_featured_section++;
        slideImage_featuredSection();
    }
    /*counter++;
    slideImage();*/
}