import React from 'react'
import {plugins} from '../../plugins'

const compose = (App, fns = []) => {
  return fns.reduce((a, fn) => fn(a), App)
}

export const renderComponent = ({component, isEdit, updateProps, id, childrenId}) => {
  const {name, schema, fns = [], props, children} = component
  const Component = plugins.components.get(name)

  if (!Component) {
    return null
  }

  if (isEdit || !fns.length) {
    return (
      <Component
        oth={component}
        updateProps={updateProps}
        {...props}
        childrenId={childrenId}
        id={id}
      />
    )
  }

  const functions = []

  return compose(
    <Component
      oth={component}
      updateProps={updateProps}
      {...props}
      childrenId={childrenId}
      id={id}
    />,
    functions
  )
}
