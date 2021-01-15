import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { RootState } from '../../redux/rootReducer'
import { Image, PageHeader } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import "./Photo.css"

const Photo: React.FC = () => {

  const { photos } = useSelector((state: RootState) => state.photos)
  const { id } = useParams<{ id: string }>()

  const currentId = Number(id)
  const currentPic = photos.find(({ id }) => id === currentId)
  const previous = photos.find(({ id }) => id === currentId - 1)
  const next = photos.find(({ id }) => id === currentId + 1)

  if (!currentPic) return null

  return (
    <div className="photo">
      <PageHeader> <b>Photo {currentPic.id}</b></PageHeader>
      <div className="photoBox">
        {previous && <Link to={`/photos/${previous.id}`}> <LeftOutlined style={{ fontSize: '50px' }} /></Link>}
        <Image width={450} src={currentPic.url} />
        {next && <Link to={`/photos/${next.id}`}><RightOutlined style={{ fontSize: '50px' }} /></Link>}
      </div>
      <div><b>{currentPic.title}</b> </div>
      <Link to={`/albums/${currentPic.albumId}`}>Album {currentPic.albumId}</Link>
    </div>
  )
}

export default Photo