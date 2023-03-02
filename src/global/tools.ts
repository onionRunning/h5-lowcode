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
    if (componentsLists[i].name === 'Carousel') {
      htmlStr += `\n${carouselHtmlStr(componentsLists[i])}`
      cssStr += `\n${carouseCssStr(componentsLists[i])}`
      jsStr += `\n${carouseJsStr(componentsLists[i])}`
    }
    if (componentsLists[i].name === 'Block') {
      //
      console.info(componentsLists[i], 'block')
    }
  }
  return htmlTemplate(htmlStr, tempCss(cssStr), `${tempJs(jsStr)}`)
}

const iconUrl = `https://4tune-wemore.oss-cn-beijing.aliyuncs.com/pixel-pad/close.png`
const headerHtmlStr = props => `
    <div id="${props.id}" class="header">
      <img alt="close" id="${props.iconId || 'leftIconId'}" src="${iconUrl}"></img>
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

const carouselHtmlStr = data => {
  let imgStr = ``
  let dotStr = ``
  data.props.carousels.forEach((item, index) => {
    imgStr += `
        <div class="img-area-${data.id}">
          <img class="imgs-${data.id}" src="${item.url}" alt="${index}">
        </div>
    `
    dotStr += `
      <span class="points-span-${data.id}"></span>
    `
  })
  const baseStr = `
    <div id="box-container-${data.id}">
      <div id="box-img-${data.id}">
        ${imgStr}
      </div>
      <div class="points-${data.id}">
        ${dotStr}
      </div>
    </div>
  `
  return baseStr
}

const carouseCssStr = data => {
  const height = data?.props.height ? data?.props.height : 400
  const baseStr = `
    #box-container-${data.id} {
      position: relative;
      width: 100%;
      height: ${height}px;
      overflow: hidden;
    }
    #box-img-${data.id} {
      width: 400%;
      height: 100%;
    }
    .img-area-${data.id} {
      width: 100vw;
      height: ${height}px;
      float: left;
      cursor: pointer;
    }
    .points-${data.id} {
      width: 100%;
      height: 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 18px 0;
      position: absolute;
      bottom: 10px;
    }
    .points-${data.id} span {
      display: inline-block;
      width: 16px;
      height: 4px;
      border-radius: 24px;
      background-color: #fff;
      margin-right: 4px;
      opacity: 0.5;
    }
    .points-${data.id} span:first-child {
      opacity: 1;
    }
    .points-${data.id} span:last-child {
      margin-right: 0;
    }
    .imgs-${data.id} {        
      max-width: 100vw;
      width: 100%;
      height: 100%;
      max-height: ${height}px;
      pointer-events: none;
      -webkit-touch-callout: none;
      object-fit: cover;
    }
  `
  return baseStr
}

const carouseJsStr = data => {
  const l = data.props.carousels?.length - 1
  const auto = data.props.autoplay
    ? `
        function autoMove() {
          let nTimer = setInterval(() => {
              if (moveCount > 1) {
                  clearInterval(nTimer)
                  return
              }
              if (index === ${l}) {
                  index = - 1
              }
              index++
              console.info(index, '-----1111')
              if (index === 0) {
                  removeTransition()
                  setTransform(0)
              }
              addTransition()
              setTransform(-index * width)
              setOpacity(index)
          }, 3000)
        }
        autoMove()
  `
    : ''

  const jsStr = `
      const start${data.id} = () => {
        const bannerImg = $('box-img-${data.id}')
        const width = $('box-container-${data.id}').offsetWidth
        const imgCount = bannerImg.childElementCount
        const pointsSpanLists = document.getElementsByClassName('points-span-${data.id}')

        const addTransition = () => {
          bannerImg.style.transition = "all 0.3s"
        }
        const removeTransition = () => {
            bannerImg.style.transition = "none"
        }
        const setTransform = (transitionX) => {
          console.info(transitionX, 'transitionX')
          bannerImg.style.transform = "translateX(" + transitionX + "px)"
        }
        const setOpacity = (_index) => {
          Array.from(pointsSpanLists).forEach((element,idx) => {
              if (idx !== _index) {
                  pointsSpanLists[idx].style.opacity = '0.5'
              }
              if (pointsSpanLists[_index]) {
                  pointsSpanLists[_index].style.opacity = '1'
              }
          })
        }
        let startX = 0 //触摸起始位置
        let moveX = 0 //滑动时x的位置
        let distanceX = 0 //滑动的距离
        let isMove = false //是否滑动过
        let index = 0
        let moveCount = 0

        bannerImg.addEventListener("touchstart", (e) => {
          startX = e.touches[0].clientX //记录X位置
        })
        bannerImg.addEventListener('touchmove', (e) => {
          moveX = e.touches[0].clientX
          moveCount+=1
          distanceX = moveX - startX //滑动的距离
          if (distanceX > 0 && index <= 0) {
              return
          } else if (distanceX < 0 && index >= ${l}) {
              return
          }
          removeTransition() //停止过渡
          setTransform(-index * width + distanceX) //跟着动
          isMove = true //正在滑动
        })

        bannerImg.addEventListener('touchend', (e) => {
          //滑动距离要大于屏幕1/100
          moveCount+=1

          if (isMove && Math.abs(distanceX) > width / 100) {
              if (index <= 0 && distanceX > 0) return
              if (index >= ${l}> 0) {
                  index--
                  console.log("向右滑", index);
              } else {
                  index++
                  console.log("向左滑", index);
              }
          }
          //吸附效果
          addTransition()
          setTransform(-index * width)
          setOpacity(index)
          //重置
          startX = 0
          moveX = 0
          distanceX = 0
          isMove = false
        })
        ${auto}  
      }
      start${data.id}()
  `
  return jsStr
}
