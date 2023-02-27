import React from 'react'
import {paddingCss, paddingCssSchema, marginCss, marginCssSchema} from '@/views/editor'
import style from './index.module.css'

const Block = (props: any) => {
  const renderChildRen = () => {
    console.info('----------------------------', {...props.style.margin, ...props.style.padding})
    return (
      props?.oth?.children?.map((item, index) => {
        if (item.name === 'ph') {
          return (
            <div
              className={style.ph}
              key={index}
              onClick={props?.updateProps?.(props.oth.id, item, index)}>
              ph
            </div>
          )
        }
        if (item.name === 'img') {
          return (
            <div
              className={style.img}
              key={index}
              onClick={props?.updateProps?.(props.oth.id, item, index)}>
              img
            </div>
          )
        }
        if (item.name === 'btn') {
          return (
            <div
              className={style.btn}
              key={index}
              onClick={props?.updateProps?.(props.oth.id, item, index)}>
              btn
            </div>
          )
        }
        return (
          <div className={style.normal} key={index}>
            11
          </div>
        )
      }) || ''
    )
  }

  return (
    <div className={style.block} style={{...props.style.margin, ...props.style.padding}}>
      {renderChildRen()}
    </div>
  )
}

export default Block

Block.defaultProps = {
  backgroundColor: '#efefef',
  height: 48,
  fontSize: 16,
  color: '#fff',
  id: 'block-5e-',
  style: {
    margin: marginCss,
    padding: paddingCss,
  },
}

Block.schema = {
  id: {
    title: '组件id(唯一)',
    type: 'id',
  },
  backgroundColor: {
    title: '背景色',
    type: 'color',
  },
  height: {
    title: '组件高度',
    type: 'number',
  },
  style: {
    type: 'children',
    title: '基本样式',
    schema: {
      margin: marginCssSchema,
      padding: paddingCssSchema,
    },
  },
}
