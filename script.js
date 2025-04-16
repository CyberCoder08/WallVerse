const grid = document.getElementById("wallpaperGrid");

async function searchWallpapers() {
  const query = document.getElementById("searchInput").value;
  const url = `/api/search?query=${encodeURIComponent(query)}&per_page=30`;

  const res = await fetch(url);
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
