import React, { useEffect, useState } from "react";
import axios from "axios";

const WallpaperGrid = () => {
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    const fetchWallpapers = async () => {
      const res = await axios.get(
        "https://wallhaven.cc/api/v1/search?categories=111&purity=100&sorting=random"
      );
      setWallpapers(res.data.data);
    };
    fetchWallpapers();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {wallpapers.map((wp) => (
        <a
          href={wp.path}
          key={wp.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={wp.thumbs.large}
            alt={wp.id}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
        </a>
      ))}
    </div>
  );
};

export default WallpaperGrid;
