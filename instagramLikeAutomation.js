//* Option One - like limit and alert (best option to avoid ban):

// initialize variable that keeps track of how many likes and set to 0.
// define function to alert user of max likes.
// set interval.
// define instagram's like button.
// define instagrams next button.
// if likes is equal to 700.
// clear interval & return limit function.
// else if likes is less than or equal to 700.
// if theres a like button, click it. 
// add 1 to likes.
// log to console the string.
// clicks the arrow to go to next photo. 


let likes = 0;

let limit = () => {
    return alert(`You've liked ${likes} post(s). ${likes} is the maximum amount of likes per day.`);
};

let automator = setInterval(() => {
    const likeButton = document.querySelector('svg[aria-label="Like"]');
    const nextButton = document.querySelector('svg[aria-label="Next"]');
    if (likes === 700) {
        clearInterval(automator);
        return limit();
    } 
    else if (likes <= 700) {
            if (likeButton.getAttribute("aria-label") === "Like") {
            likeButton.parentNode.parentElement.click();
            likes++;
            console.log(`You've liked ${likes} post(s)`); 
        };
            nextButton.parentElement.parentNode.click();
    }}, 20000);





//* option 2 - like limit, but no alert

// initialize variable that keeps track of how many likes and set to 0.
// set interval.
// define instagram's like button.
// define instagrams next button.
// while likes is less than or equal to 700.
// if theres a like button, click it. 
// add 1 to likes.
// log to console the string.
// click the arrow to go to new photo.

/*

let likes = 0;

setInterval(() => {
    const likeButton = document.querySelector('svg[aria-label="Like"]');
    const nextButton = document.querySelector('svg[aria-label="Next"]');
    while (likes <= 700) {
    if (likeButton.getAttribute("aria-label") === "Like") {
        likeButton.parentNode.parentElement.click();
        likes++;
        console.log(`You've liked ${likes} post(s)`); 
    }
        nextButton.parentElement.parentNode.click();
}}, 20000); 

*/ 





//* option 3 - no like limit and no alert:

// initialize variable that keeps track of how many likes and set to 0.
// set interval.
// define instagram's like button.
// define instagrams next button.
// if theres a like button, click it. 
// add 1 to likes.
// log to console the string.
// click the arrow to go to new photo.

/*

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

*/









