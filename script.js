function stateChange1() {
    var obj = document.getElementById(`15`);
    obj.style.display =
        (obj.style.display == "none" ? "block" : "none");
}
function stateChange2() {
    var obj = document.getElementById(`16`);
    obj.style.display =
        (obj.style.display == "none" ? "block" : "none");
}
function stateChange3() {
    var obj = document.getElementById(`17`);
    obj.style.display =
        (obj.style.display == "none" ? "block" : "none");
}

let slideIndex = 1;
showSlides(slideIndex);
    
    function nextSlide() {
        showSlides(slideIndex += 1);
    }

    function previousSlide() {
        showSlides(slideIndex -= 1);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("section__slide");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (let slide of slides) {
            slide.style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }