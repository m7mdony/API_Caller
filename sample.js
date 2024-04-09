
// Example usage:
const contentProcessor = new ContentProcessor('https://www.google.com'); // It is important not to have "/"" at the end of the baseurl
contentProcessor.getHomePage().then(data => console.log(data));