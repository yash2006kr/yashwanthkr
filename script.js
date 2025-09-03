// Function to run when the page is fully loaded
function onPageLoad() {
  // Hide preloader
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";

  // Initialize AOS animations
  AOS.init();

  // Fetch visitor count
  fetch('https://api.countapi.xyz/hit/yash2006kr.github.io/yashwanthkr.github.io')
    .then(response => response.json())
    .then(data => {
      document.getElementById('visits').innerText = data.value;
    })
    .catch(err => {
      console.error("Visitor counter error:", err);
      document.getElementById('visits').innerText = "Unavailable";
    });
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
