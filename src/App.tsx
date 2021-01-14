import React from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'
import Album from './components/Album'
import AlbumList from './components/AlbumList'
import NavBar from './components/NavBar'
import Photo from './components/Photo/Photo'
import PhotoList from './components/PhotoList'
import User from './components/User/User'
import UserList from './components/UserList'
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
      <Router>
        <NavBar />
        <Switch>
          <Route path="/photos/:id" render={() => <Photo />} />
          <Route path="/albums/:id" render={() => <Album />} />
          <Route path="/users/:id" render={() => <User />} />
          <Route path="/albums" render={() => <AlbumList />} />
          <Route path="/users" render={() => <UserList />} />
          <Route path="/" render={() => <PhotoList />} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
