export const getBlockStyle = (payload: any) => {
  const obj = {} as any
  if (payload.backgroundColor) {
    obj.backgroundColor = payload.backgroundColor
  }
  if (payload.height) {
    obj.height = payload.height
  }
  return obj
}
