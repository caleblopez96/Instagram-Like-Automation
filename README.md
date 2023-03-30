Instagram Like Automation

**DISCLAIMER:** <br>
<i>This project is intended for personal use only, and was created as a means of enhancing my JavaScript skills. It is not intended for commercial use, and I make no guarantees or warranties regarding its functionality or compatibility with all systems or browsers.</i><br>

<i>By using this code, you assume all risk and responsibility for any implications or legal issues that may arise, including but not limited to any violations of the terms of service for the platform on which it is used. I am not responsible for any damages or losses that may occur as a result of the use of this code.</i><br>

<i>Note that this project may incorporate third-party libraries or tools, which may be subject to additional terms or conditions. Any such terms or conditions will be outlined in the project documentation.</i><br>


**Description:**
This is a script that automates the process of liking Instagram posts. It uses JavaScript to identify and click the "Like" button on Instagram posts, and can be set to run at regular intervals.

**Getting Started:**
To use this script, you will need to copy the code and paste it into your web browser's developer console while on Instagram.com. Once the code is running, it will automatically like posts on your behalf.

**Built With:**
This script is built using JavaScript.

**License:**
This script is released under the Open Source MIT License.

**Acknowledgments:**
This script was inspired by similar scripts found on GitHub and other online resources.

**Contributing:**
Contributions and constructive criticism for this project are welcome. If you have suggestions for how to improve the code, please submit a pull request or open an issue.

**Contact:**
If you have any questions about this script, you can reach me at caleblopez96@gmail.com



**Project Overview:**

First we create a variable that keeps count of the amount of likes.
``` 
let likes = 0;
```

We then create a function to alert the user that they have reached their API limit. 
``` 
let limit = () => {
    return alert(`You've liked ${likes} post(s). ${likes} is the maximum amount of likes per day.`);
};
``` 

Finally, we create a function to handle the automation process and the interval at which it runs. <br> 

``` 
const automator = setInterval(() => {
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
``` 

**Developer Notes:**<br>
<i> A 20 second interval is recommended to avoid Instagrams bot detection and rate limits. </i><br>
<i> 700 is the maximum amount of likes allowed to avoid Instagrams bot detection and rate limits. </i><br>
<i> It is recommended to only run this code once every 24 hours to avoid Instagrams bot detection and rate limits</i>
