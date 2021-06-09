import React from 'react';

const Song = ({song, setCurrentSong, favoriteSongs, setFavoriteSongs, favorite}) => {
    
    const randomHexColor = () => {
        let result           = '';
        let characters       = '01234';
        let charactersLength = characters.length;
        for ( var i = 0; i < 2; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    const addToFavoriteSongs = () => {
        const exist = favoriteSongs.includes(song);
        
        if(!exist){
            setFavoriteSongs([...favoriteSongs, song]);
        }
    }
    
    return (
        <div className="song" style={{
        backgroundColor: '#0161'+randomHexColor()
        }}>
        <h2 style={{color: 'white'}}>
            {song.name}
        </h2>
        <h4 style={{color: '#a7bbc7',textAlign:'end'}}>{song.artistName}</h4>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <button className="btn" onClick={() => setCurrentSong(song)}><i className="fa fa-play"></i></button>
            {!favorite && <button className="btn" onClick={addToFavoriteSongs}><i class="fa fa-heart"></i></button>}
        </div>
        
        </div>
    )
}

export default Song
