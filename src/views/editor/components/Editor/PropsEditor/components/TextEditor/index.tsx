import React from 'react'
import {Input, Avatar} from 'antd'
import style from './index.module.scss'

export const TextEditor = ({type, schema, value, onChange}) => {
  const {width, height} = schema

  return (
    <div className={style.wrapper}>
      <p>
        {schema.title || '文本'}
        <span className={style.desc}>{schema.desc}</span>
      </p>
      <div>
        <Input disabled={type === 'id'} onChange={e => onChange(e.target.value)} value={value} />
      </div>
    </div>
  )
}
