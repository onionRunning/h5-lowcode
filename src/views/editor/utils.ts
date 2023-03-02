import {fontCss, fontCssSchema, marginCss, marginCssSchema, paddingCss, paddingCssSchema} from '.'

export const getTypeConfigs = (type: string) => {
  if (type === 'ph' || type === 'btn') {
    return {
      name: type,
      props: {
        id: type,
        style: {
          margin: marginCss,
          padding: {
            paddingTop: 8,
            paddingRight: 8,
            paddingBottom: 8,
            paddingLeft: 8,
          },
          font: fontCss,
        },
      },
      schema: {
        id: {
          title: '组件(段落)id',
          type: 'id',
        },
        text: {
          title: '组件(段落)内容',
          type: 'textarea',
        },
        height: {
          title: '组件高度',
          type: 'number',
        },
        width: {
          title: '组件宽度',
          type: 'number',
        },
        style: {
          type: 'children',
          title: '基本样式',
          schema: {
            margin: marginCssSchema,
            padding: paddingCssSchema,
            font: fontCssSchema,
          },
        },
      },
    }
  }
  if (type === 'img') {
    return {
      name: type,
      props: {
        id: type,
        style: {
          margin: marginCss,
        },
        url: 'https://avatars.githubusercontent.com/u/7843281?s=40&v=4',
        width: 32,
        height: 32,
      },
      schema: {
        id: {
          title: '组件(图片)id',
          type: 'id',
        },
        url: {
          title: '图片地址',
          type: 'text',
        },
        height: {
          title: '组件高度',
          type: 'number',
        },
        width: {
          title: '组件宽度',
          type: 'number',
        },
        style: {
          type: 'children',
          title: '基本样式',
          schema: {
            margin: marginCssSchema,
          },
        },
      },
    }
  }
}
