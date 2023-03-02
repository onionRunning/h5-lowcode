import {data} from '@/global/demo'
import {createHtml} from '@/global/tools'
import {Card} from 'antd'
import React, {useState} from 'react'
const gridStyle = {
  width: '25%',
  textAlign: 'center',
  cursor: 'pointer',
} as React.CSSProperties
export const Lists = () => {
  const [showType, setShowType] = useState('')

  const open = () => {
    setShowType('demo1')
  }

  const isShow = !!showType
  return (
    <div>
      <Card title="demo区">
        <Card.Grid onClick={open} style={gridStyle}>
          简单网页1
        </Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
      </Card>

      {isShow && (
        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          }}>
          <iframe
            srcDoc={createHtml(data)}
            style={{width: '375px', height: '90vh', marginTop: '5vh', backgroundColor: '#fff'}}
          />
          <div
            onClick={() => setShowType('')}
            style={{position: 'fixed', top: '16px', right: '16px', zIndex: 9999}}>
            关闭预览
          </div>
        </div>
      )}
    </div>
  )
}

export default Lists
