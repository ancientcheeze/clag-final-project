const envelopeWrapper = document.querySelector(".envelope-wrapper");
const heart = document.querySelector(".heart");
const letter = document.querySelector(".letter");

// OPEN envelope + show letter
heart.addEventListener("click", () => {
    // remove closing state if present
    envelopeWrapper.classList.remove("closing");
    envelopeWrapper.classList.toggle("flap");
});

// CLOSE letter + envelope on letter click
letter.addEventListener("click", () => {
    // step 1: letter slides back in
    envelopeWrapper.classList.add("closing");

    // step 2: flap closes AFTER letter is inside
    setTimeout(() => {
        envelopeWrapper.classList.remove("flap");
    }, 800); // must be shorter than letter transition
});
