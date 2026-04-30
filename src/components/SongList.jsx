import SongCard from "./SongCard";

export default function SongList({ tracks = [] }) {
  return (
    <div className="song-list">
      {tracks.map((track) => (
        <SongCard key={track.id} track={track} />
      ))}
    </div>
  );
}
