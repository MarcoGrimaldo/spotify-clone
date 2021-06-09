import {useState} from 'react';
import Song from './Song';
import Reproductor from './Reproductor';

const Home = ({ favoriteSongs }) => {

    const [currentSong, setCurrentSong] = useState(null);

    const checkFavorite = (song) => {
        if(favoriteSongs.includes(song)){
            return true;
        }
        else{
            return false;
        }
    }

    return (
        <div style={{paddingTop: '3rem'}}>
            <h1 style={{marginInline: '4rem', color: 'white'}}>Favorite Songs</h1>
            <section className="songsContainer">
                {favoriteSongs.length > 0 ? favoriteSongs.map((song, index) =>(
                    
                    <Song key={index} song={song} setCurrentSong={setCurrentSong} favorite={checkFavorite(song)}/>
                    )):
                <h4 style={{color:'white'}}>Empty favorite song list 😔</h4>
                }
            </section>
            {currentSong && <Reproductor 
                source={currentSong.previewURL} 
                name={currentSong.name}
                artist={currentSong.artistName}
                >
            </Reproductor>}
        </div>
    )
}

export default Home
