import {tempCss} from './tempCss'
import {htmlTemplate} from './tempHtml'
import {tempJs} from './tempJs'

export const createHtml = (componentsLists: any[]) => {
  let jsStr = ''
  let cssStr = ''
  let htmlStr = ''
  for (let i = 0; i < componentsLists.length; i++) {
    if (componentsLists[i].name === 'Header') {
      htmlStr += `\n${headerHtmlStr(componentsLists[i].props)}`
      cssStr += `\n${headerCssStr(componentsLists[i].props)}`
      jsStr += `\n${headerJsStr({
        contents: componentsLists[i].props,
        fns: componentsLists[i].fns,
      })}`
    }
  }
  return htmlTemplate(htmlStr, tempCss(cssStr), `${tempJs(jsStr)}`)
//   console.info(htmlTemplate(htmlStr, tempCss(cssStr), `${tempJs(jsStr)}`))
}

const headerHtmlStr = props => `
    <div id="${props.id}">
      {/* 左边 */}
      <img alt="close" id="${props.leftId || 'leftIconId'}" src="/common/close.png" />
      {/* 右边 */}
      <span id="${props.rightId || 'rightTextId'}">${props?.rightText}</span> 
    </div>
`

const headerCssStr = props => `
    #${props.id} {
      backgroundColor: ${props.backgroundColor};
      height: ${props.height}px;
      font-size: ${props.fontSize}px;
      color: ${props.color};
    } 

    #${props.id} img {
      width: 26px;
      height: 26px;
      margin-left: 16px;
      border: 1px solid transparent;
    }

    #${props.id} span {
      margin-right: 16px;
      font-weight: 500;
    }
`

const headerJsStr = props => {
  let str = props.fns
  if (props?.contents?.iconId) {
    str = str.replace('leftIconId', props.contents.iconId)
  }
  if (props?.contents?.rightId) {
    str = str.replace('rightTextId', props.contents.rightId)
  }
  return str
}
