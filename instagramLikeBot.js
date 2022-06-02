// intitialize likes to 0
// set interval and seconds (in ms)
// define like button
// define next picture button
// if theres a heart, click heart, add 1 to likes and log to console the string
// click the parent element of arrow to go to new photo


let likes = 0;

setInterval(() => {
    const likeButton = document.querySelector('svg[aria-label ="Like"]');
    const nextButton = document.querySelector('svg[aria-label="Next"]');
    if (likeButton) {
        likeButton.parentNode.parentElement.click()
        likes++;
        console.log(`You've liked ${likes} post(s)`);
    }
    nextButton.parentElement.parentNode.click();
}, 15000);

let password = 'catdog';
if (password.length >=6) {
    if (password.indexOf (' ') !== -1) {
        console.log('Password cannot include spaces.');
    }
    else {
        console.log('valid password!'); // valid password
    }
}
else {
    console.log('Password is too short.');
}

