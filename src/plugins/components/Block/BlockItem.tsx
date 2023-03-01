import React, {useEffect, useState} from 'react'
import style from './index.module.css'

function BlockItem(props: any) {
  const [typeItem, setItem] = useState<any>({})
  const {item, id} = props

  useEffect(() => {
    if (id) {
      setItem({})
    }
  }, [id])

  if (item?.name === 'ph') {
    const phStyle = typeItem.idx === item.index ? {border: '1px dashed #fa0'} : {}
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
        ph
      </div>
    )
  }
  if (item?.name === 'img') {
    return (
      <div className={style.img} key={item.index} onClick={() => props?.updateProps?.()}>
        img
      </div>
    )
  }
  if (item?.name === 'btn') {
    return (
      <div className={style.btn} key={item.index} onClick={() => props?.updateProps?.()}>
        btn
      </div>
    )
  }
  return (
    <div className={style.normal} key={item.index}>
      11
    </div>
  )
}

export default BlockItem
