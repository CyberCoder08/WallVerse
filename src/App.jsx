import React from "react";
import WallpaperGrid from "./components/WallpaperGrid";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">WallVerse</h1>
      <WallpaperGrid />
    </div>
  );
};

export default App;
