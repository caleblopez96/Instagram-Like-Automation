// Intiliaze a variable to keep count of the amount of likes.
let likes = 0;

// function to alert user they have hit the limit.
let limit = () => {
    return alert(`You've liked ${likes} post(s). ${likes} is the maximum amount of likes per day.`);
};

// the interval sets the time between likes.
const automator = setInterval(() => {

    // storing necessary DOM elements into variables
    const likeButton = document.querySelector('svg[aria-label="Like"]');
    const nextButton = document.querySelector('svg[aria-label="Next"]');

    // stoping interval at API limit
    if (likes === 700) {
        clearInterval(automator);
        return limit();
    }

    // if "Like" button is present on page. ->
    // click like button. ->
    // increase like counter by 1. -> 
    // log to console current amount of likes.
    else if (likes <= 700) {
            if (likeButton.getAttribute("aria-label") === "Like") {
            likeButton.parentNode.parentElement.click();
            likes++;
            console.log(`You've liked ${likes} post(s)`); 
        };
            nextButton.parentElement.parentNode.click();
}}, 20000);