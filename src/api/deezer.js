
export async function searchTracks(query) {
  const res = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, {
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key" : "fcea2c229cmsh236277382a6936ep12d9fcjsnc4b8a4c46784"
    }
  });

  const data = await res.json();
  return data.data;
}
