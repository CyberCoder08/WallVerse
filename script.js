const ACCESS_KEY = "8cBUjJ99dXuFDzwqUgvMOyzHUd5hLCz3mYBRZoCUfI8"; // Unsplash API Key
const grid = document.getElementById("wallpaperGrid");

async function searchWallpapers() {
  const query = document.getElementById("searchInput").value;
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=30&client_id=${ACCESS_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  displayWallpapers(data.results);  // Using 'results' for Unsplash API response
}

function displayWallpapers(photos) {
  grid.innerHTML = "";
  photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo.urls.small;  // Use 'small' image URL
    img.alt = photo.photographer;
    grid.appendChild(img);
  });
}
