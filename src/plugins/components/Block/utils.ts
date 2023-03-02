export const getBlockStyle = (payload: any) => {
  const obj = {} as any
  if (payload.backgroundColor) {
    obj.backgroundColor = payload.backgroundColor
  }
  if (payload.height) {
    obj.height = payload.height
  }
  if (payload.display) {
    obj.display = payload.display
  }
  console.info(payload, 'payload')
  if (payload['just-content']) {
    obj['justify-content'] = payload['just-content']
  }
  return obj
}

export const getPhStyle = (params: any) => {
  const payload = params.style
  const obj = {} as any
  if (payload.font) {
    obj['font-size'] = payload.font.fontSize
    obj.color = payload.font.color
  }
  if (payload.margin) {
    obj['margin-left'] = payload.margin.marginLeft
    obj['margin-right'] = payload.margin.marginRight
    obj['margin-top'] = payload.margin.marginTop
    obj['margin-bottom'] = payload.margin.marginBottom
  }
  if (payload.padding) {
    obj['padding-left'] = payload.padding.paddingLeft
    obj['padding-right'] = payload.padding.paddingRight
    obj['padding-top'] = payload.padding.paddingTop
    obj['padding-bottom'] = payload.padding.paddingBottom
  }
  if (params.width) {
    obj.width = `${params.width}px`
  }
  if (params.height) {
    obj.height = `${params.height}px`
  }
  return obj
}
