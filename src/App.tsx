import React from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'
import Album from './components/Album'
import AlbumList from './components/AlbumList'
import NavBar from './components/NavBar'
import Photo from './components/Photo'
import PhotoList from './components/PhotoList'
import { fetchAlbums } from './redux/albumSlice'
import { fetchPhotos } from './redux/photoSlice'
import { fetchUsers } from './redux/userSlice'


const App: React.FC = () => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchPhotos())
    dispatch(fetchAlbums())
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className="App">
      <h1>PhotoBrowser</h1>
      <Router>
        <NavBar />
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
