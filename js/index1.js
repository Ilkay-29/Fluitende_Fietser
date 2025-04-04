document.addEventListener("DOMContentLoaded", () => {
 
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

    setInterval(() => moveSlide(1), 3000);

 
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

    setInterval(() => moveSlide2(1), 4000);


    let timerButton = document.getElementById("timeline-button");

    function startTimer(duration) {
        let timeLeft = duration;

        let timerInterval = setInterval(function () {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            timerButton.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                window.location.href = "afsluiting.html"; 
            } else {
                timeLeft--;
            }
        }, 1000);
    }

    startTimer(60);
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".product").forEach(product => {
        product.addEventListener("click", function () {
            let imgSrc = this.querySelector("img").src;
            let description = this.querySelector("p").textContent;
            openPopup(imgSrc, description);
        });
    });
});

function openPopup(imageSrc, description) {
    let popup = document.createElement("div");
    popup.classList.add("popup");

    let popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");

    let popupImage = document.createElement("img");
    popupImage.src = imageSrc;
    popupImage.classList.add("popup-img");

    let popupText = document.createElement("p");
    popupText.classList.add("popup-text");
    popupText.innerHTML = `<strong>${description}</strong><br><span style="color: red;">nog niet in vooraad</span><br>in vooraad: <strong>April 12, 2025</strong>`;

    popupContent.appendChild(popupImage);
    popupContent.appendChild(popupText);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.remove();
        }
    });
}