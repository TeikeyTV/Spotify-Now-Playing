console.log("Connected");

// DOM Connector
const main_container = document.querySelector(".main-container");

const card_container = document.createElement("div");
card_container.classList.add("card-container");
main_container.appendChild(card_container);

// Pages
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

            <input type="text" placeholder="Username">
            <br><br>

            <input type="password" placeholder="Password">
            <br><br>

            <button onclick="navigate('/now-playing')">
                Sign In
            </button>
        </div>
    `,

    "/now-playing": `
        <div class="page">
            <h1>Now Playing</h1>

            <h2>🎵 My Favorite Song</h2>
            <p>Artist Name</p>

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

// Navigation function
function navigate(route) {
    location.hash = route;
}

// Render current page
function render() {
    if (!card_container) {
        console.error("Element '.card-container' not found.");
        return;
    }

    const route = location.hash.slice(1) || "/";

    card_container.innerHTML =
        pages[route] ||
        `
        <div class="page">
            <h1>404</h1>
            <p>Page Not Found</p>

            <button onclick="navigate('/')">
                Go Home
            </button>
        </div>
        `;
}

// Listen for route changes
window.addEventListener("hashchange", render);

// Initial load
window.addEventListener("DOMContentLoaded", render);