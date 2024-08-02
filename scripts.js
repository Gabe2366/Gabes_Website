document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseover', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'block';
        });

        dropdown.addEventListener('mouseout', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 20000); // Change image every 2 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
