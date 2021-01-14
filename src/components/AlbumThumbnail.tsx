import React from 'react'
import { Album } from '../types'
import { Link } from 'react-router-dom'
import { Card, CardContent, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    minHeight: 150,
    display: 'inline-block',
    margin: 5,
    backgroundColor: "aquamarine"
  }
})

const AlbumThumbnail: React.FC<{ album: Album }> = ({ album }) => {

  const classes = useStyles()

  if (!album) return null

  return (
    <Link to={`/albums/${album.id}`}>
      <Card variant="outlined" className={classes.root} >
        <CardContent >Album {album.id}</CardContent>
    </Card>
    </Link>
  )
}

export default AlbumThumbnail
