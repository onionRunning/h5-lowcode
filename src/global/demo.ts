export const data1 = [
  {
    id: '6',
    name: 'Header',
    props: {
      text: '右边',
      backgroundColor: '#ffffff',
      height: 48,
      fontSize: 16,
      color: '#000000',
      centerText: '标题内容',
      rightText: '更多',
      id: 'header-only',
    },
    fns: '\n      $(\'leftIconId\').addEventListener(\'click\', () => {\n        //\n      })\n\n      $(\'rightTextId\').addEventListener(\'click\', () => {\n        window?.webkit?.messageHandlers?.vip_restore?.postMessage?.({type: "restore_web"})\n      })\n',
  },
  {
    id: '0',
    name: 'Block',
    props: {
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#fff',
      id: 'block-5e-',
      display: 'block',
      style: {
        margin: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
        },
        padding: {
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 8,
          paddingLeft: 16,
        },
      },
    },
    children: [
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 0,
            },
            font: {fontSize: 14, color: '#333', textAlign: 'left'},
          },
          text: '标题内容',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 12, color: '#333', textAlign: 'left'},
          },
          text: '介绍相关的区域有哪些!介绍相关的区域有哪些!介绍相关的区域有哪些!介绍相关的区域有哪些!介绍相关的区域有哪些!介绍相关的区域有哪些!介绍相关的区域有哪些!介绍相关的区域有哪些!介绍相关的区域有哪些!',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
    ],
  },
  {
    id: '5',
    name: 'Block',
    props: {
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#fff',
      id: 'block-5e-',
      display: 'flex',
      style: {
        margin: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
        },
        padding: {
          paddingTop: 0,
          paddingRight: 16,
          paddingBottom: 0,
          paddingLeft: 16,
        },
      },
    },
    children: [
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 0,
              paddingBottom: 8,
              paddingLeft: 0,
            },
            font: {fontSize: 14, color: '#333', textAlign: 'left'},
          },
          text: '金刚区',
          height: null,
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
    ],
  },
  {
    id: '4',
    name: 'Block',
    props: {
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#fff',
      id: 'block-5e-',
      display: 'flex',
      style: {
        margin: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
        },
        padding: {
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
        },
      },
      'just-content': 'space-between',
    },
    children: [
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://img1.baidu.com/it/u=1969119334,1536026357&fm=253&fmt=auto&app=138&f=JPEG?w=253&h=253',
          width: 80,
          height: 80,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://img1.baidu.com/it/u=3433205855,142452562&fm=253&fmt=auto&app=138&f=JPEG?w=253&h=253',
          width: 80,
          height: 80,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://img1.baidu.com/it/u=1219047719,669710044&fm=253&fmt=auto&app=138&f=JPEG?w=253&h=253',
          width: 80,
          height: 80,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://img2.baidu.com/it/u=890286787,2026283731&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=501',
          width: 80,
          height: 80,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
    ],
  },
  {
    id: '1',
    name: 'Block',
    props: {
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#fff',
      id: 'block-5e-',
      display: 'block',
      style: {
        margin: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
        },
        padding: {
          paddingTop: 0,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
        },
      },
    },
    children: [
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://avatars.githubusercontent.com/u/7843281?s=40&v=4',
          width: 343,
          height: 343,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 12, color: '#333', textAlign: 'left'},
          },
          text: '当前内容表示的是哪些东西!',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
    ],
  },
  {
    id: '2',
    name: 'Block',
    props: {
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#fff',
      id: 'block-5e-',
      display: 'flex',
      style: {
        margin: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
        },
        padding: {
          paddingTop: 0,
          paddingRight: 16,
          paddingBottom: 0,
          paddingLeft: 16,
        },
      },
    },
    children: [
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 4,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://avatars.githubusercontent.com/u/7843281?s=40&v=4',
          width: 32,
          height: 32,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 14, color: '#333', textAlign: 'left'},
          },
          text: '有趣的内容是哪些!',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
    ],
  },
  {
    id: '3',
    name: 'Block',
    props: {
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#fff',
      id: 'block-5e-',
      display: 'flex',
      style: {
        margin: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
        },
        padding: {
          paddingTop: 0,
          paddingRight: 16,
          paddingBottom: 0,
          paddingLeft: 16,
        },
      },
    },
    children: [
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 4,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://avatars.githubusercontent.com/u/7843281?s=40&v=4',
          width: 32,
          height: 32,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 14, color: '#333', textAlign: 'left'},
          },
          text: '快来参与吧!',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
    ],
  },
]

export const data2 = [
  {
    id: '0',
    name: 'Header',
    props: {
      text: '右边',
      backgroundColor: '#ffffff',
      height: 48,
      fontSize: 16,
      color: '#9b9b9b',
      centerText: '标题内容',
      rightText: 'more',
      id: 'header-only',
    },
    fns: '\n      $(\'leftIconId\').addEventListener(\'click\', () => {\n        //\n      })\n\n      $(\'rightTextId\').addEventListener(\'click\', () => {\n        window?.webkit?.messageHandlers?.vip_restore?.postMessage?.({type: "restore_web"})\n      })\n',
  },
  {
    id: '1',
    name: 'Carousel',
    props: {
      autoplay: true,
      carousels: [
        {
          url: 'https://img2.baidu.com/it/u=1809579266,1802196151&fm=253&fmt=auto&app=138&f=JPG?w=1201&h=500',
        },
        {
          url: 'https://img.zcool.cn/community/0131ff5a3120cfa80120ba384fea28.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100',
        },
        {
          url: 'https://img2.baidu.com/it/u=1809579266,1802196151&fm=253&fmt=auto&app=138&f=JPG?w=1201&h=500',
        },
      ],
      height: 160,
    },
  },
  {
    id: '2',
    name: 'Block',
    props: {
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#fff',
      id: 'block-5e-',
      display: 'flex',
      style: {
        margin: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
        },
        padding: {
          paddingTop: 0,
          paddingRight: 16,
          paddingBottom: 0,
          paddingLeft: 0,
        },
      },
    },
    children: [
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 14, color: '#333', textAlign: 'left'},
          },
          text: '尊享美丽生活，处理有趣问题!',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
    ],
  },
  {
    id: '3',
    name: 'Block',
    props: {
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#fff',
      id: 'block-5e-',
      display: 'flex',
      style: {
        margin: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
        },
        padding: {
          paddingTop: 0,
          paddingRight: 16,
          paddingBottom: 0,
          paddingLeft: 0,
        },
      },
    },
    children: [
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 20, color: '#333', textAlign: 'left'},
          },
          text: '推荐模块',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
    ],
  },
  {
    id: '4',
    name: 'Block',
    props: {
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#fff',
      id: 'block-5e-',
      display: 'flex',
      style: {
        margin: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
        },
        padding: {
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
        },
      },
      'just-content': 'space-between',
    },
    children: [
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://img2.baidu.com/it/u=385201582,1071245088&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=501',
          width: 60,
          height: 60,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://bpic.588ku.com/element_pic/20/06/30/321b5c57641dde696434c511cb4e748f.jpg%21/fw/253/quality/90/unsharp/true/compress/true',
          width: 60,
          height: 60,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://img1.baidu.com/it/u=2429633633,4188664320&fm=253&fmt=auto&app=138&f=JPEG?w=253&h=253',
          width: 60,
          height: 60,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://img1.baidu.com/it/u=2527492608,29282256&fm=253&fmt=auto&app=138&f=JPEG?w=253&h=253',
          width: 60,
          height: 60,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://bpic.588ku.com/element_pic/20/06/30/630f4fa4146cc512a98959389aae60c9.jpg%21/fw/253/quality/90/unsharp/true/compress/true',
          width: 60,
          height: 60,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
    ],
  },
  {
    id: '5',
    name: 'Block',
    props: {
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#fff',
      id: 'block-5e-',
      display: 'flex',
      style: {
        margin: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
        },
        padding: {
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        },
      },
    },
    children: [
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 20, color: '#333', textAlign: 'left'},
          },
          text: '推荐列表',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
    ],
  },
  {
    id: '6',
    name: 'Block',
    props: {
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#fff',
      id: 'block-5e-',
      display: 'flex',
      style: {
        margin: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
        },
        padding: {
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
        },
      },
    },
    children: [
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://avatars.githubusercontent.com/u/7843281?s=40&v=4',
          width: 32,
          height: 32,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 14, color: '#333', textAlign: 'left'},
          },
          width: 200,
          text: '当前内容值得处理',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 30,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 12, color: '#333', textAlign: 'left'},
          },
          width: 300,
          text: '如果处理到很多场景需要怎么去啊是开机大吉啊时刻记得你卡就是等你撒滴啦什么的考拉茅塞顿开拉上你的了啊啥快递那里说的那克里斯蒂娜离开是的呢',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
    ],
  },
  {
    id: '10',
    name: 'Block',
    props: {
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#fff',
      id: 'block-5e-',
      display: 'flex',
      style: {
        margin: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
        },
        padding: {
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
        },
      },
    },
    children: [
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://avatars.githubusercontent.com/u/7843281?s=40&v=4',
          width: 32,
          height: 32,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 14, color: '#333', textAlign: 'left'},
          },
          width: 200,
          text: '当前内容值得处理',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 30,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 12, color: '#333', textAlign: 'left'},
          },
          width: 300,
          text: '如果处理到很多场景需要怎么去啊是开机大吉啊时刻记得你卡就是等你撒滴啦什么的考拉茅塞顿开拉上你的了啊啥快递那里说的那克里斯蒂娜离开是的呢',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
    ],
  },
  {
    id: '9',
    name: 'Block',
    props: {
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#fff',
      id: 'block-5e-',
      display: 'flex',
      style: {
        margin: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
        },
        padding: {
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
        },
      },
    },
    children: [
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://avatars.githubusercontent.com/u/7843281?s=40&v=4',
          width: 32,
          height: 32,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 14, color: '#333', textAlign: 'left'},
          },
          width: 200,
          text: '当前内容值得处理',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 30,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 12, color: '#333', textAlign: 'left'},
          },
          width: 300,
          text: '如果处理到很多场景需要怎么去啊是开机大吉啊时刻记得你卡就是等你撒滴啦什么的考拉茅塞顿开拉上你的了啊啥快递那里说的那克里斯蒂娜离开是的呢',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
    ],
  },
  {
    id: '8',
    name: 'Block',
    props: {
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#fff',
      id: 'block-5e-',
      display: 'flex',
      style: {
        margin: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
        },
        padding: {
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
        },
      },
    },
    children: [
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://avatars.githubusercontent.com/u/7843281?s=40&v=4',
          width: 32,
          height: 32,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 14, color: '#333', textAlign: 'left'},
          },
          width: 200,
          text: '当前内容值得处理',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 30,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 12, color: '#333', textAlign: 'left'},
          },
          width: 300,
          text: '如果处理到很多场景需要怎么去啊是开机大吉啊时刻记得你卡就是等你撒滴啦什么的考拉茅塞顿开拉上你的了啊啥快递那里说的那克里斯蒂娜离开是的呢',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
    ],
  },
  {
    id: '7',
    name: 'Block',
    props: {
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#fff',
      id: 'block-5e-',
      display: 'flex',
      style: {
        margin: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
        },
        padding: {
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16,
        },
      },
    },
    children: [
      {
        name: 'img',
        props: {
          id: 'img',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
          },
          url: 'https://avatars.githubusercontent.com/u/7843281?s=40&v=4',
          width: 32,
          height: 32,
        },
        schema: {
          id: {title: '组件(图片)id', type: 'id'},
          url: {title: '图片地址', type: 'text'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
            },
          },
        },
      },
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 14, color: '#333', textAlign: 'left'},
          },
          width: 200,
          text: '当前内容值得处理',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 30,
            },
            padding: {
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
            },
            font: {fontSize: 12, color: '#333', textAlign: 'left'},
          },
          width: 300,
          text: '如果处理到很多场景需要怎么去啊是开机大吉啊时刻记得你卡就是等你撒滴啦什么的考拉茅塞顿开拉上你的了啊啥快递那里说的那克里斯蒂娜离开是的呢',
        },
        schema: {
          id: {title: '组件(段落)id', type: 'id'},
          text: {title: '组件(段落)内容', type: 'textarea'},
          height: {title: '组件高度', type: 'number'},
          width: {title: '组件宽度', type: 'number'},
          style: {
            type: 'children',
            title: '基本样式',
            schema: {
              margin: {
                title: '外边距',
                marginTop: {title: '上边距', type: 'number', min: 0},
                marginRight: {title: '右边距', type: 'number', min: 0},
                marginBottom: {title: '下边距', type: 'number', min: 0},
                marginLeft: {title: '左边距', type: 'number', min: 0},
              },
              padding: {
                title: '内边距',
                paddingTop: {title: '上边距', type: 'number', min: 0},
                paddingRight: {title: '右边距', type: 'number', min: 0},
                paddingBottom: {title: '下边距', type: 'number', min: 0},
                paddingLeft: {title: '左边距', type: 'number', min: 0},
              },
              font: {
                title: '字体',
                fontSize: {title: '大小', type: 'number'},
                color: {title: '颜色', type: 'color'},
              },
            },
          },
        },
      },
    ],
  },
]
