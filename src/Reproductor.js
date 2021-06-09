import React from 'react';
import {useAudio} from 'react-use';

export default function Reproductor({source, name, artist}) {
    const [audio, state, controls] = useAudio({
        src: source,
        autoPlay: true,
      });
    
      return (
        <div className="reproductor">
          {audio}
          <h2>{name} - {artist}</h2>
          <h3>0:{Math.round(state.time)} / 0:30</h3>
          <div>
            
            <button className="btn-rep" onClick={state.paused ? controls.play : controls.pause}>{state.paused  ? <i className="fa fa-play"></i> : <i className="fa fa-pause"></i>}</button>
            <input 
              type="range"
              value={state.volume}
              onChange={(e) => controls.volume(Number(e.target.value))}
              min="0.0"
              max="1.0"
              step="0.05"
            />
            <br/>
          </div>
          
        </div>
      );
}
