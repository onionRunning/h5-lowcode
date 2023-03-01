import {fontCss, fontCssSchema, marginCss, marginCssSchema, paddingCss, paddingCssSchema} from '.'

export const getTypeConfigs = (type: string) => {
  if (type === 'ph' || type === 'img' || type === 'btn') {
    return {
      name: type,
      props: {
        id: type,
        style: {
          margin: marginCss,
          padding: paddingCss,
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
          type: 'number',
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
}
