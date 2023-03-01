import React, {useState} from 'react'
import style from './index.module.scss'

export const Header = ({text, ...oth}) => {
  const [imgStyle, setImgStyle] = useState({})
  // console.info(oth, '----')
  const enterEditor = () => {
    // console.info('进入编辑状态')
    setImgStyle({border: '1px dashed #fao'})
  }
  // console.info(imgStyle, 'imgStyle')
  return (
    <div className={style.wrapper} style={{...oth}}>
      {/* 左边 */}
      <img alt="close" onClick={enterEditor} src="/common/close.png" style={imgStyle} />
      {/* 中间 */}
      {/* <span>{oth?.centerText}</span> */}
      {/* 右边 */}
      <span>{oth?.rightText || ''}</span>
    </div>
  )
}

Header.defaultProps = {
  text: '右边',
  backgroundColor: '#fa0',
  height: 48,
  fontSize: 16,
  color: '#fff',
  centerText: '标题内容',
  rightText: '取消',
  id: 'header-only',
}
Header.defaultFns = `
      $('leftIconId').addEventListener('click', () => {
        //
      })

      $('rightTextId').addEventListener('click', () => {
        window?.webkit?.messageHandlers?.vip_restore?.postMessage?.({type: "restore_web"})
      })
`
;(Header as any).schema = {
  id: {
    title: '组件唯一id',
    type: 'id',
  },
  iconId: {
    title: '左边iconId',
    type: 'id',
  },
  rightId: {
    title: '右边文字id',
    type: 'id',
  },
  rightText: {
    title: '右边默认值',
    type: 'rightText',
  },
  backgroundColor: {
    title: '背景色',
    type: 'color',
  },
  height: {
    title: '组件高度',
    type: 'number',
  },
  fontSize: {
    title: '字体大小',
    type: 'number',
  },
  color: {
    title: '字体颜色',
    type: 'color',
  },
}
