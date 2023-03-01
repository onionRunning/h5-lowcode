import React, {useState} from 'react'
import {paddingCss, paddingCssSchema, marginCss, marginCssSchema} from '@/views/editor'
import style from './index.module.css'
import BlockItem from './BlockItem'
import {getBlockStyle} from './utils'

const Block = (props: any) => {
  console.info(props, '----')
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
            id={idxx}
            item={{...item, index}}
            key={index}
            updateProps={() => props.updateProps(obj)}
          />
        )
      }) || ''
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
