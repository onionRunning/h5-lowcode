import React from 'react'
import clone from 'lodash/cloneDeep'
import {IComponent} from '../../../type'
import {renderEditorItem} from './renderEditorItem'

interface IProps {
  oth: any
  component: IComponent | null
  componentIndex: number
  onChange(props: Pick<IComponent, 'props'>, t?: any): void
}

export const PropsEditor: React.FC<IProps> = ({component, componentIndex, onChange, oth}) => {
  if (!component) {
    // eslint-disable-next-line no-param-reassign
    component = {} as IComponent
  }

  const {schema = {}, props = {}} = component

  const handle = (key, newValue) => {
    const newProps = clone(props)
    newProps[key] = newValue

    // console.info(newProps, '====new props')
    if (oth) {
      onChange(newProps as Pick<IComponent, 'props'>, oth)
      return
    }
    onChange(newProps as Pick<IComponent, 'props'>)
  }

  // console.info(schema, 'schema', props, component)
  console.info(oth, '====11111=====')
  return (
    <ul>
      {Object.keys(schema).map(key => {
        let value = props[key]
        if (key === 'id' && !oth) {
          value = `${value}${componentIndex}`
        }
        if (key === 'id' && oth) {
          value = `${oth?.current?.props.id}${oth?.current?.id}-${value}-${oth.childId}`
          console.info(value, '----')
        }
        return <li key={key}>{renderEditorItem(key, value, schema[key], handle)}</li>
      })}
    </ul>
  )
}
