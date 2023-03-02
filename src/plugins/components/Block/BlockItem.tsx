import React, {useEffect, useState} from 'react'
import Block from '.'
import style from './index.module.css'
import {getPhStyle} from './utils'

function BlockItem(props: any) {
  const [typeItem, setItem] = useState<any>({})
  const {item, id, childrenId, index} = props

  useEffect(() => {
    if (id) {
      setItem({})
    }
  }, [id])
  // console.info(props, 'block------item')

  if (item?.name === 'ph') {
    const phStyle =
      typeItem.idx === item.index && typeItem.idx === childrenId
        ? {border: '1px dashed #000', ...getPhStyle(props.item.props)}
        : getPhStyle(props.item.props)
    return (
      <div
        className={style.ph}
        key={item.index}
        onClick={e => {
          e.stopPropagation()
          setItem({type: 'ph', idx: item.index})
          props?.updateProps?.()
        }}
        style={phStyle}>
        {props.item.props.text || 'ph'}
      </div>
    )
  }
  if (item?.name === 'img') {
    const imgStyle =
      typeItem.idx === item.index && typeItem.idx === childrenId
        ? {border: '1px dashed #000', ...getPhStyle(props.item.props)}
        : getPhStyle(props.item.props)
    return (
      <img
        className={style.img}
        key={item.index}
        onClick={e => {
          e.stopPropagation()
          setItem({type: 'img', idx: item.index})
          props?.updateProps?.()
        }}
        src={props?.item?.props?.url || 'https://avatars.githubusercontent.com/u/7843281?s=40&v=4'}
        style={imgStyle}
      />
    )
  }
  if (item?.name === 'block') {
    console.info(item, '------')
    return (
      <div className={style.btn} key={item.index} onClick={() => props?.updateProps?.()}>
        <Block />
      </div>
    )
  }
  return (
    <div className={style.normal} key={item.index}>
      block
    </div>
  )
}

export default BlockItem
