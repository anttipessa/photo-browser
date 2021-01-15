import React from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'
import Album from './components/Album'
import AlbumList from './components/AlbumList/AlbumList'
import LandingPage from './components/LandingPage/LandingPage'
import NavBar from './components/NavBar'
import Photo from './components/Photo/Photo'
import PhotoList from './components/PhotoList/PhotoList'
import User from './components/User/User'
import UserList from './components/UserList/UserList'
import { fetchAlbums } from './redux/albumSlice'
import { fetchPhotos } from './redux/photoSlice'
import { fetchUsers } from './redux/userSlice'


const App: React.FC = () => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchPhotos())
    dispatch(fetchAlbums())
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/photos/:id" render={() => <Photo />} />
          <Route path="/albums/:id" render={() => <Album />} />
          <Route path="/users/:id" render={() => <User />} />
          <Route exact path="/albums" render={() => <AlbumList />} />
          <Route exact path="/users" render={() => <UserList />} />
          <Route exact path="/photos" render={() => <PhotoList />} />
          <Route path="/" render={() => <LandingPage />} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
