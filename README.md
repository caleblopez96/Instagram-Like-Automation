# Instagram-Like-Bot
Simple Instagram like bot. 
works by manipulating the DOM

 in order for this program to work, you need to visit instagram.
 search a hashtag of your choice, and click on the first 'most recent' photo.

 use dev tools to inspect the pulled up photo. paste the code into the console. run it.

// if the pulled up photo has a like button, it will click it
// after, it will look for the 'next' arrow and click it
// this happens once every 20 seconds
// then the entire code repeats

Instagrams rate limit is 200 request per token per hour 
with that being said, the max request per minute would be 3.33
with an interval of 1 like every 20 second, we fufill 
the maximum amount of request per minute.

this script allows for 180 likes per hour and remains under the rate limit of 200
