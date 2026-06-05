console.log('Connected');

// DOM Connector
const mainContainer = document.querySelector('.main-container');

// Web Page History Mapping
const routes = {
    "/welcome" : "<h1>Welcome to Spotify Now Playing</h1>",
    "/now-playing" : "<h1>Now Playing</h1>",
    "/Close" : "<h1>Close</h1>"
};

function gotoInputpage() {
    console.log('Navigating to input page');
}