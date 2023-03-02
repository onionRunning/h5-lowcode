import {data1, data2} from '@/global/demo'
import {createHtml} from '@/global/tools'
import {Card} from 'antd'
import {useRouter} from 'next/router'
import React, {useState} from 'react'
const gridStyle = {
  width: '25%',
  textAlign: 'center',
  cursor: 'pointer',
} as React.CSSProperties
export const Lists = () => {
  const router = useRouter()
  const [showType, setShowType] = useState('')

  const open = e => {
    e.stopPropagation()
    setShowType('data1')
  }

  const linkToEditor = () => {
    router.push('/editor')
  }

  const isShow = !!showType
  return (
    <div>
      <Card onClick={linkToEditor} title="demo区">
        <Card.Grid onClick={open} style={gridStyle}>
          简单网页1
        </Card.Grid>
        <Card.Grid
          onClick={e => {
            e.stopPropagation()
            setShowType('data2')
          }}
          style={gridStyle}>
          简单网页2
        </Card.Grid>
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
            srcDoc={createHtml(showType === 'data1' ? data1 : data2)}
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
