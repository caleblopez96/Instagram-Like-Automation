// intitialize likes to 0
// set interval and seconds (in ms)
// define like button
// define next picture button
// if theres a heart, click heart, add 1 to likes and log to console the string
// click the parent element of arrow to go to new photo


let likes = 0;
setInterval(() => {
    const likeButton = document.querySelector('svg[aria-label="like"[width ="24"]');
    const nextPostButton = document.querySelector('svg [aria-label="Next"]');
    if (likeButton) {
        likeButton.parentNode.parentElement.click()
        likes++;
        console.log(`You've liked ${likes} post(s)`);
    }
    nextPostButton.parentElement.parentElement.click();
}, 20000);