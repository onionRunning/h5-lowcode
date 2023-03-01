import React from 'react'
import {Carousel as ACarousel} from 'antd'
import {transformStyle} from '@/views/editor'
import style from './index.module.scss'

export const Carousel = ({autoplay, dotPosition, carousels = [], style: commonStyle, ...oth}) => {
  const sty = oth.imgHeight ? {height: oth.imgHeight} : {}
  const carSty = oth.height ? {height: oth.height} : {}

  // console.info(sty, 'carousels')
  return (
    <div className={style.wrapper} style={transformStyle(commonStyle)}>
      <ACarousel autoplay={autoplay} dotPosition={dotPosition} style={carSty}>
        {carousels.map((carousel, index) => {
          return (
            <img
              key={index}
              onClick={() => window.open(carousel.link)}
              src={carousel.url}
              style={sty}
            />
          )
        })}
      </ACarousel>
    </div>
  )
}

Carousel.defaultProps = {
  autoplay: false,
  carousels: [
    {
      url: 'https://gd2.alicdn.com/imgextra/i1/1094533563/TB2BFUoxH1YBuNjSszhXXcUsFXa_!!1094533563.jpg_400x400.jpg',
      link: '',
    },
    {
      url: 'https://seopic.699pic.com/photo/40005/6885.jpg_wh1200.jpg',
      link: '',
    },
    {
      url: 'http://t14.baidu.com/it/u=3047410229,4044637632&fm=224&app=112&f=JPEG?w=500&h=500',
      link: '',
    },
  ],
}
;(Carousel as any).schema = {
  autoplay: {
    type: 'switch',
    title: '自动播放',
  },
  carousels: {
    type: 'children',
    min: 1,
    title: '轮播组',
    schema: {
      url: {
        title: '图片链接',
        type: 'img',
        // width: 686,
        // height: 180,
      },
      link: {
        title: '跳转链接',
        type: 'text',
      },
    },
  },
  height: {
    title: '轮播高度',
    type: 'number',
  },
}
