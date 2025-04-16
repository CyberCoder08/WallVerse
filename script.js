const grid = document.getElementById("wallpaperGrid");

async function searchWallpapers() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  grid.innerHTML = "";

  for (let i = 0; i < 30; i++) {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}&q=${query}`;
    img.alt = query;
    grid.appendChild(img);
  }
}
