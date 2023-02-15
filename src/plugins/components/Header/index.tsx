import React from 'react'
import {
  paddingCss,
  paddingCssSchema,
  marginCss,
  marginCssSchema,
  fontCss,
  fontCssSchema,
  transformStyle,
} from '@/views/editor'
import style from './index.module.scss'

export const Header = ({text, ...oth}) => {
  // console.info(oth, '----')
  return (
    <div className={style.wrapper} style={{...oth}}>
      {/* 左边 */}
      <img alt="close" src="/common/close.png" />
      {/* 中间 */}
      <span>{oth?.centerText}</span>
      {/* 右边 */}
      <span>{oth?.rightText || ''}</span>
    </div>
  )
}

Header.defaultProps = {
  text: '右边',
  bgcolor: '#fa0',
  height: 48,
  fontSize: 16,
  color: '#fff',
  centerText: '标题内容',
  rightText: '右边',
}
;(Header as any).schema = {
  rightText: {
    title: '右边内容',
    type: 'rightText',
  },
  centerText: {
    title: '中间内容',
    type: 'centerText',
  },
  bgcolor: {
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
