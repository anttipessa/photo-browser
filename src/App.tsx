import React from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'
import Album from './components/Album'
import AlbumList from './components/AlbumList'
import Photo from './components/Photo'
import PhotoList from './components/PhotoList'
import { fetchAlbums } from './redux/albumSlice'
import { fetchPhotos } from './redux/photoSlice'


const App: React.FC = () => {

  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(fetchPhotos())
    dispatch(fetchAlbums())
  }, [dispatch])

  return (
    <div className="App">
      <h1>PhotoBrowser</h1>
      <Router>
        <Switch>
          <Route path="/photos/:id" render={() => <Photo />} />
          <Route path="/albums/:id" render={() => <Album />} />
          <Route path="/albums" render={() => <AlbumList />} />
          <Route path="/" render={() => <PhotoList />} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
