import React from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'
import Photo from './components/Photo'
import PhotoList from './components/PhotoList'
import { fetchPhotos } from './redux/photoSlice'


const App: React.FC = () => {

  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(fetchPhotos())
  }, [dispatch])

  return (
    <div className="App">
      <h1>PhotoBrowser</h1>
      <Router>
        <Switch>
          <Route path="/photos/:id" render={() => <Photo />} />
          <Route path="/" render={() => <PhotoList />} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
