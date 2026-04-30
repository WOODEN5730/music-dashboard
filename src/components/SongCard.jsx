
export default function SongCard({ track }) {
  return (
    <div className="song-card">
      <img src={track.album.cover_medium} alt={track.title} />
      <h3>{track.title}</h3>
      <p>{track.artist.name}</p>
    
      <audio controls>
        <source src={track.preview} type="audio/mpeg" />
      </audio>
    </div>
  );
}
