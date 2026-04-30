import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SongList from "../components/SongList";
import { searchTracks } from "../api/deezer";
import "../App.css";

export default function Home() {
  const [tracks, setTracks] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchTracks(query);
    setTracks(results);
  };

  return (
    <div>
      <h1>Music Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <SongList tracks={tracks} />
    </div>
  );
}
