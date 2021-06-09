import Search from './Search';
import Home from './Home';

import {useState,useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
//import { useLocalStorage } from 'react-use';


const initialState = JSON.parse(localStorage.getItem("favoritos") || "[]");

function App() {
  
  const [favoriteSongs, setFavoriteSongs] = useState(initialState);
  //const [favoriteSongs, setFavoriteSongs] = useLocalStorage("favoritos",'[]');
  
  useEffect(() => {
      localStorage.setItem('favoritos',JSON.stringify(favoriteSongs));
  }, [favoriteSongs])

  return (
    <Router>
      <nav className="navMenu">
        <Link to="/" className="navbar-element">Me</Link>
        <Link to="/search" className="navbar-element">Search</Link>
        <div className="dot"></div>
      </nav> 
      <Switch>
        <Route exact path="/">
          <Home favoriteSongs={favoriteSongs} />
        </Route>
        <Route path="/search">
          <Search favoriteSongs={favoriteSongs}  setFavoriteSongs={setFavoriteSongs}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
