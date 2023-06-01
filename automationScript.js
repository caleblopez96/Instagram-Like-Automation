// Intiliaze variables to keep count of the amount of likes.
let likes = 0;
const MAX_LIKES = 700;
let message = `You've liked ${likes} post(s). ${likes} is the maximum amount of likes per day.`;

// Function to alert user they have hit the limit.
let limit = () => alert(message);

// The interval parameter sets the time between likes
const automator = (interval) => {
    setInterval(() => {
    // Storing necessary DOM elements into variables.
    const likeButton = document.querySelector('svg[aria-label="Like"]');
    const nextButton = document.querySelector('svg[aria-label="Next"]');
    // Clearing interval at API limit
    if (likes === MAX_LIKES) {
        clearInterval(automator);
        return limit();
    }
    else if (likes <= MAX_LIKES) {
        // If likeButton is present on page
        if (likeButton.getAttribute("aria-label") === "Like") {
        // Click like button
        likeButton.parentNode.parentElement.click();
        // Increase the count of likes
        likes++;
        console.log(`You've liked ${likes} post(s)`); 
        };
        // Click next button
        nextButton.parentElement.parentNode.click();
    }
    // Time in milliseconds
}, interval);
};

// calling the function with a 20 second interval
automator(20000);



/* 

https://www.instagram.com/explore/tags/nameOfHashTagGoesHere/

*/

// create a chrome extension that list the steps
// has a button
// button when clicked runs automator(20000);


// step 1: Log into instagram.
// step 2: Search for a hashtag.
// step 3: Navigate to the "Most recent post" section.
// step 4: Click on the any photo.
// step 5: Click Automate!

