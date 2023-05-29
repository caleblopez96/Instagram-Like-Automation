// Intiliaze variables to keep count of the amount of likes.
let likes = 0;
const MAX_LIKES = 700;
let message = `You've liked ${likes} post(s). ${likes} is the maximum amount of likes per day.`;

// function to alert user they have hit the limit.
let limit = () => {
    return alert(message);
};

// the interval sets the time between likes.
const automator = (interval)=>{
    setInterval(() => {
    // storing necessary DOM elements into variables.
    const likeButton = document.querySelector('svg[aria-label="Like"]');
    const nextButton = document.querySelector('svg[aria-label="Next"]');
    // clearing interval at API limit
    if (likes === MAX_LIKES) {
        clearInterval(automator);
        return limit();
    }
    else if (likes <= MAX_LIKES) {
            // if likeButton is present on page
            if (likeButton.getAttribute("aria-label") === "Like") {
            // click like button
            likeButton.parentNode.parentElement.click();
            // increase likes count
            likes++;
            console.log(`You've liked ${likes} post(s)`); 
        };
            // click next button
            nextButton.parentElement.parentNode.click();
    }
    // time in milliseconds
}, interval);
};

// calling the function with a 20 second interval
automator(20000);