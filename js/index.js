$(document).ready(function () {
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
        showMenu();
    });
    const lm_arr = document.querySelectorAll('.lm_lazy');
    lm_arr.forEach((v) => {imageObserver.observe(v);});
});

function showMenu() {
    const menuElement = document.getElementById('lm_menu');
    console.log(menuElement.style.height);
    if (menuElement.style.left === "-100vw" || menuElement.style.left === "") {
        //menuElement.style.top = "calc(0vh + 71px)";
        menuElement.style.left = "0px";
        const body = document.getElementsByTagName('body')[0].classList.add('lm_overflow_hidden');
    }
    else {
        menuElement.style.left = "-100vw";
        const body = document.getElementsByTagName('body')[0].classList.remove('lm_overflow_hidden');
    }
}

//SLIDE SHOW
var slideIndex = 0;
//showSlides();

function showSlides() {

    let slides = document.getElementsByClassName("lm_slide_show_slides");
    let dots = document.getElementsByClassName("lm_dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("lm_active");
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("lm_active");
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function currentSlide(slideInt) {
    let slides = document.getElementsByClassName("lm_slide_show_slides");
    let dots = document.getElementsByClassName("lm_dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("lm_active");

        if (slideInt === i) {
            slides[i].style.display = "block";
            dots[i].classList.add("lm_active");
        }
    }
}