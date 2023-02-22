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
}

const headerHtmlStr = props => `
    <div id="${props.id}" class="header">
      <img alt="close" id="${props.iconId || 'leftIconId'}" src="/common/close.png"></img>
      <span id="${props.rightId || 'rightTextId'}">${props?.rightText}</span> 
    </div>
`

const headerCssStr = props => `
    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
    }
    #${props.id} {
      background-color: ${props.backgroundColor};
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

const carouselHtmlStr = props => {
  const baseStr = `
    <div id="box-container">
      <div id="box-img">
        <div class="img-area">
            <img class="imgs" src="./img/img_1.png" alt="today">
            <p class="p" id="imgTitle_1">Daily activities</p>
            <p class="p-text" id="imgText_1">Track your daily movements</p>
        </div>
        <div class="img-area">
            <img class="imgs" src="./img/img_2.png" alt="today">
            <p class="p" id="imgTitle_2">Record all day life</p>
            <p class="p-text" id="imgText_2">Automatic activity recognition</p>
        </div>
        <div class="img-area">
            <img class="imgs" src="./img/img_3.png" alt="today">
            <p class="p" id="imgTitle_3">Trip sharing</p>
            <p class="p-text" id="imgText_3">Photo and 3D video sharing of trips</p>
        </div>
        <div class="img-area">
            <img class="imgs" src="./img/img_4.png" alt="today">
            <p class="p" id="imgTitle_4">Scientific analysis</p>
            <p class="p-text" id="imgText_4">Statistical analysis of commuting, sports and other data</p>
        </div>
      </div>
    </div>
    <div class="points">
      <span class="points-span"></span>
      <span class="points-span"></span>
      <span class="points-span"></span>
      <span class="points-span"></span>
    </div>
  `
}

const carouseCssStr = props => {
  const baseStr = `
    #box-img {
        width: 400%;
        height: 100%;
    }
    .img-area {
      width: 100vw;
      height: 356px;
      float: left;
      cursor: pointer;
    }
    .points {
        height: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 18px 0;
    }
    .points span {
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
        margin-right: 14px;
        opacity: 0.5;
    }
    .points span:first-child {
        opacity: 1;
    }
    .points span:last-child {
        margin-right: 0;
    }
  `
}

const carouseJsStr = props => {
  const jsStr = `
    const start = () => {
      const bannerImg = $('box-img')
      const width = $('box-container').offsetWidth
      const imgCount = bannerImg.childElementCount
    }
    start()

  `
}
