import React, { useState, useEffect } from 'react';

import './app.css';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/dieegoapolinario/repos');
    const data = await response.json();
    setRepositories(data);
  }, []);

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories])

  function handleFavorite(id){
    const newRepositories = repositories.map(repo =>{
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
    });
    setRepositories(newRepositories);
  }

  /*GEO LOCATION*/
  const [location, setLocation] = useState({});

  useEffect(() =>{
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  function handlePositionReceived({ coords }){
    const { latitude, longitude } = coords;
    setLocation({ latitude, longitude });
  }

  return (
    <>
      <h2>Repositories Github</h2>
      <ul>
        { repositories.map(repo =>(
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span>(Favorito)</span>}
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>  
          </li>
        ))}
      </ul>
      <h2>Geo Location</h2>
      <p>Latitude: {location.latitude}</p> <br/>
      <p>Longitude: {location.longitude}</p>
    </>
  );
}

export default App;
