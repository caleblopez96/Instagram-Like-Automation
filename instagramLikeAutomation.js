// initialize likes to 0
// set interval and seconds (in ms)
// define like button
// define next picture button
// if theres a likeButton, click likeButton,
// add 1 to likes
// log to console the string
// click the arrow to go to new photo


let likes = 0;

setInterval(() => {
    const likeButton = document.querySelector('svg[aria-label="Like"]');
    const nextButton = document.querySelector('svg[aria-label="Next"]');
    if (likeButton.getAttribute("aria-label") === "Like") {
        likeButton.parentNode.parentElement.click()
        likes++;
        console.log(`You've liked ${likes} post(s)`); 
    }
        nextButton.parentElement.parentNode.click();
}, 20000);





