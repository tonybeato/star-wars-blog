# Assessment Review

### 1. How long did you spend on the coding challenge? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.  

I spent around 3.5 non-consecutive hours on the project. If I had more time, I would have looked into more complex solutions to build the app via React or Vue.js, rather than vanilla JS. I also contemplated adding a "long ago in a galaxy far far away..." opening animation, but as time ran out I opted to publish as is. Also, I would spend another 3.5 hours minimum going through the code refactoring and cleaning up.

<br>

### 2. What is one of the most useful features added to Javascript as of ES6 or later? Please include a snippet of code that shows how you've used it.  

The most useful ES6 feature in my opinion is JS Modules. They've become a standard in design patterns, and with some polyfill their cross browser support is great:

*formatDate.js*
```
const formatDate = timeStamp => {
  // Create a date object from the timestamp
  let date = new Date(timeStamp);

  // Create a list of names for the months
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // return a formatted date
  return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}

export default formatDate;
```

*main.js*
```
import formatDate from './formatDate';

...

'date': formatDate(d.date),
```

<br>

### 3. How would you track down a performance issue in production? Have you ever had to do this?

I usually have integration testing baked into my WordPress deployments, but I don't have anything set up for JS based sites yet. If I were to attempt to solve a performance issue for a site like this, I would start with DevTools in Chrome and continue to debug locally until I can replicate the problem and push a new patch.

<br>

### 4. How would you improve the WordPress Rest API that you just used?  

I am NOT a fan of how the Media and Taxonomy routes are seperate from my the main API call. It took me too long before realizing I could append <code>?_embed</code> to the main REST route in order to access all I needed. If I were to change the API for the purpose of Headless WP development, I would create custom routes with only the revelent information needed for each API call (i.e. simplifying the property paths).

<br>

### 5. How would you deploy the finished product to production?  

For a site with a JS backend, I would use Next.js with Vercel's CLI for deployments. For a PHP backend I would stick with ol' Faithful (Trellis).