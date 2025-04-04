document.addEventListener("DOMContentLoaded", () => {
    // SLIDER 1 - Algemeen
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slider-container .slide");
    const totalSlides = slides.length;
    const slider = document.querySelector(".slider-container .slider");

    function showSlide(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }

        slider.style.transform = `translateX(${-slideIndex * 100}%)`;
    }

    window.moveSlide = function (step) {
        showSlide(slideIndex + step);
    };

    setInterval(() => moveSlide(1), 3000); // Auto-slide

    // SLIDER 2 - Korting
    let slideIndex2 = 0;
    const slides2 = document.querySelectorAll(".slider-container2 .slide");
    const totalSlides2 = slides2.length;
    const slider2 = document.querySelector(".slider-container2 .slider");

    function showSlide2(index) {
        if (index >= totalSlides2) {
            slideIndex2 = 0;
        } else if (index < 0) {
            slideIndex2 = totalSlides2 - 1;
        } else {
            slideIndex2 = index;
        }

        slider2.style.transform = `translateX(${-slideIndex2 * 100}%)`;
    }

    window.moveSlide2 = function (step) {
        showSlide2(slideIndex2 + step);
    };

    setInterval(() => moveSlide2(1), 4000); // Auto-slide

    // TIMER
    let timerButton = document.getElementById("timeline-button");

    function startTimer(duration) {
        let timeLeft = duration;

        let timerInterval = setInterval(function () {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            timerButton.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                window.location.href = "afsluiting.html"; // Of een andere pagina
            } else {
                timeLeft--;
            }
        }, 1000);
    }

    startTimer(60);
});
