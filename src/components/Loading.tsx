import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const Loading: React.FC = () => {
  
  const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />

  return (
    <Spin indicator={antIcon} />
  )
}

export default Loading
