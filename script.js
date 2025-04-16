const API_KEY = "tPlJc5tScaNJbJtYPLiW5CvCb9uDHaGU4z4DrocI45QlKU7kLfyJl5hl";
const grid = document.getElementById("wallpaperGrid");

async function searchWallpapers() {
  const query = document.getElementById("searchInput").value;
  const url = `https://api.pexels.com/v1/search?query=${query}&per_page=30`;

  const res = await fetch(url, {
    headers: {
      Authorization: API_KEY
    }
  });

  const data = await res.json();
  displayWallpapers(data.photos);
}

function displayWallpapers(photos) {
  grid.innerHTML = "";
  photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo.src.medium;
    img.alt = photo.photographer;
    grid.appendChild(img);
  });
}
