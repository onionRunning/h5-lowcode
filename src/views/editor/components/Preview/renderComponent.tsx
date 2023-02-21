import React from 'react'
import {plugins} from '../../plugins'

const compose = (App, fns = []) => {
  return fns.reduce((a, fn) => fn(a), App)
}

export const renderComponent = ({component, isEdit}) => {
  const {name, schema, fns = [], props} = component
  const Component = plugins.components.get(name)

  if (!Component) {
    return null
  }

  if (isEdit || !fns.length) {
    return <Component {...props} />
  }

  const functions = []

  return compose(<Component {...props} />, functions)
}
