import React, {useRef} from 'react'
import {Input} from 'antd'
import styles from './index.module.scss'

function FnEditor(props: {fns: string; contents: any; onChange(...s: any): void}) {
  // console.info('fn_editor', props)
  const ref = useRef<any>()

  const getStr = () => {
    let str = props.fns
    if (props?.contents?.iconId) {
      str = str.replace('leftIconId', props.contents.iconId)
    }
    if (props?.contents?.rightId) {
      str = str.replace('rightTextId', props.contents.rightId)
    }
    return str
  }

  const onblur = e => {
    props.onChange(ref.current?.innerText)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.textarea} contentEditable onBlur={onblur} ref={t => (ref.current = t)}>
        {getStr()}
      </div>
    </div>
  )
}

export default FnEditor
