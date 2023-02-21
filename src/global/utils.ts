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
