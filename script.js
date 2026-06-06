console.log('Connected');

// DOM Connector
const main_container = document.querySelector('.main-container');

// Page System
const pages = {
    "/": `
        <div class="page">
            <h1>Welcome</h1>
            <p>Welcome to our music player.</p>
            <button onclick="navigate('/login')">
                Login
            </button>
        </div>
    `,

    "/login": `
        <div class="page">
            <h1>Login</h1>

            <input type="text" placeholder="Username"><br><br>

            <input type="password" placeholder="Password"><br><br>

            <button onclick="navigate('/now-playing')">
                Sign In
            </button>
        </div>
    `,

    "/now-playing": `
        <div class="page">
            <h1>Now Playing</h1>

            <h2>🎵 My Favorite Song</h2>

            <button onclick="navigate('/thank-you')">
                Finish
            </button>
        </div>
    `,

    "/thank-you": `
        <div class="page">
            <h1>Thank You</h1>

            <p>Thanks for visiting!</p>

            <button onclick="navigate('/')">
                Start Again
            </button>
        </div>
    `
};

function navigate(route) {
    location.hash = route;
}

function render() {
    const route = location.hash || "#/";
    
    switch(route) {
        case "#/":
            main_container.innerHTML = pages["/"];
            break;

        case "#/login":
            main_container.innerHTML = pages["/login"];
            break;

        case "#/now-playing":
            main_container.innerHTML = pages["/now-playing"];
            break;

        case "#/thank-you":
            main_container.innerHTML = pages["/thank-you"];
            break;
    }
}

window.addEventListener("hashchange", render);
render();