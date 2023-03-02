import React, {useState} from 'react'
import {paddingCss, paddingCssSchema, marginCss, marginCssSchema} from '@/views/editor'
import style from './index.module.css'
import BlockItem from './BlockItem'
import {getBlockStyle} from './utils'

const Block = (props: any) => {
  console.info(props, '----block')
  const [idxx, setItem] = useState(0)
  const updateItem = () => {
    setItem(t => t + 1)
  }
  // console.info(idxx, '---123')
  const renderChildRen = () => {
    // console.info('----------------------------', {...props.style.margin, ...props.style.padding})
    return (
      props?.oth?.children?.map((item, index) => {
        const obj = {parentId: props.oth.id, currentId: index, item, props}
        return (
          <BlockItem
            childrenId={props.childrenId}
            id={idxx}
            index={index}
            item={{...item, index}}
            key={index}
            updateProps={() => props.updateProps(obj)}
          />
        )
      }) || 'block'
    )
  }

  return (
    <div
      className={style.block}
      onClick={updateItem}
      style={{...props.style.margin, ...props.style.padding, ...getBlockStyle(props)}}>
      {renderChildRen()}
    </div>
  )
}

export default Block

Block.defaultProps = {
  backgroundColor: '#fff',
  fontSize: 16,
  color: '#fff',
  id: 'block-5e-',
  display: 'flex',
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
  display: {
    title: '布局',
    type: 'radio',
    options: ['block', 'flex'],
  },
  'just-content': {
    title: '布局',
    type: 'radio',
    options: ['center', 'space-between', 'flex-start'],
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
