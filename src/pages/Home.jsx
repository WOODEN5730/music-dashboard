import { useState } from "react";
import NavBar from "../components/NavBar";
import SongList from "../components/SongList";
import { searchTracks } from "../api/deezer";
import "../App.css";

export default function Home() {
  const [tracks, setTracks] = useState([]);

  const handleSearch = async (query) => {
    if (!query.trim()) return; // safety check
    const results = await searchTracks(query);
    setTracks(results || []);
  };

  return (
    <div>
      <NavBar onSearch={handleSearch} />
      <SongList tracks={tracks} />
    </div>
  );
}
