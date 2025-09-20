// A modern way to fetch the visitor count using async/await
async function updateVisitorCount() {
  const apiUrl = 'https://api.countapi.xyz/hit/yash2006kr.github.io';
  const visitsElement = document.getElementById('visits');

  try {
    // 1. Await the response from the API
    const response = await fetch(apiUrl);
    
    // 2. Check if the request was successful
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    // 3. Await the JSON data from the response
    const data = await response.json();

    // 4. Update the page with the count
    visitsElement.innerText = data.value;

  } catch (error) {
    // 5. If anything goes wrong, catch the error
    console.error("Visitor counter error:", error);
    visitsElement.innerText = "Unavailable";
  }
}

// Your existing function to run when the page is fully loaded
function onPageLoad() {
  // Hide preloader
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";

  // Initialize AOS animations
  AOS.init();

  // Call the new function to get the visitor count
  updateVisitorCount(); 
}

// Run the function after the page loads
window.addEventListener("load", onPageLoad);

// --- Theme Toggle ---
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
  toggleBtn.textContent = '☀️';
}

// Add event listener for the theme toggle button
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// --- Weather Button ---
const weatherBtn = document.getElementById('weather-btn');
weatherBtn.addEventListener('click', () => {
  window.open("https://zoom.earth/#view=0,0,2,live", "_blank");
});
// --- Stellarium Button ---
const stellariumBtn = document.getElementById('stellarium-btn');
stellariumBtn.addEventListener('click', () => {
  window.open("https://stellarium-web.org", "_blank");
});
