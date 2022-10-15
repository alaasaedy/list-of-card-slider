import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { fetchGalleriesData } from './api'
import HomePage from './pages/home'
import Album from './pages/album';

function App() {
  const [albums, setAlbum] = useState([]);
  const [albumId, setAlbumId] = useState(null);

  useEffect(() => {
    async function getAlbumsData() {
      const data = await fetchGalleriesData()
      setAlbum(data)
    }
    getAlbumsData();
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage
            albums={albums}
            setAlbumId={setAlbumId}
          />
        </Route>
        <Route exact path='/album/'>
          <Album
            albums={albums}
            albumId={albumId}
            setAlbumId={setAlbumId} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
