import {useState, useRef,useEffect} from 'react';
import Reproductor from './Reproductor';
import Song from './Song';

import './App.css';

function Search({favoriteSongs, setFavoriteSongs}) {

  const queryRef = useRef(null);
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  const search = async () => {

    const queryString = queryRef.current.value;
    let baseURL = "https://api.napster.com/";
    let key = "apikey=MTVjMjE0Y2UtNTc0Yi00NGNkLWE4YjctNzY5Y2Y1MzBiNmZi"
    let query = `query=${queryString}`;
    let url = baseURL + `/v2.2/search/verbose?${key}&${query}`;

    let response = await fetch(url);
    let json = await response.json();

    setSongs(json.search.data.tracks);
  }

  useEffect(() => {
    console.log(songs)
  }, [songs])

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      await search()
    }
  }

  return (
    <div style={{paddingTop: '3rem'}}>
      <h1 style={{marginInline: '4rem', color: 'white'}}>Search Songs</h1>
      <div className="search-container">
        <input ref={queryRef} onKeyDown={handleKeyDown} className="search-input"/>
        <button onClick={search} className="search-button">Search</button>
      </div>
      
      <section className="songsContainer">
        {songs.map((song, index) => (
          <Song 
            key={index} 
            song={song} 
            setCurrentSong={setCurrentSong} 
            favoriteSongs={favoriteSongs} 
            setFavoriteSongs={setFavoriteSongs}
            
            />
        ))}
      </section>
      {currentSong && <Reproductor 
          source={currentSong.previewURL} 
          name={currentSong.name}
          artist={currentSong.artistName}
          >
      </Reproductor>}
    </div>
  );
}

export default Search;
