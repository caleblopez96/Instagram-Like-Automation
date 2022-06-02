// intitialize likes to 0
// set interval and seconds (in ms)
// define like button
// define next picture button
// if theres a heart, click heart, add 1 to likes and log to console the string
// click the parent element of arrow to go to new photo
// 

let likes = 0;
setInterval(() => {
    const likeButton = document.querySelector('svg[aria-label="like"[width ="24"]');
    const nextPictureButton = document.querySelector('svg [aria-label="Next"]');
    if (heart) {
        heart.parentNode.parentElement.click()
        likes++;
        console.log(`You've liked ${likes} post(s)`);
    }
    arrow.parentElement.parentElement.click();
}, 20000);