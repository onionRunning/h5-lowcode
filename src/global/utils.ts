export const randomRange = (min: number) => {
  let returnStr = '' // 返回的字符串

  // 随机生成字符
  const autoGetStr = function () {
    const charFun = function () {
      const n = Math.floor(Math.random() * 62)
      if (n < 10) {
        return n // 1-10
      } else if (n < 36) {
        return String.fromCharCode(n + 55) // A-Z
      }

      return String.fromCharCode(n + 61) // a-z
    }
    while (returnStr.length < min) {
      returnStr += charFun()
    }
  }
  autoGetStr()
  return returnStr
}

export const downloadHtml = (htmlString: string) => {
  const blob = new Blob([htmlString], {type: 'text/html'})
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'my-html-template.html'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
