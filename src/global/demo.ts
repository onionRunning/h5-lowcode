export const data = [
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
        margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0},
        padding: {paddingTop: 16, paddingRight: 16, paddingBottom: 8, paddingLeft: 16},
      },
    },
    children: [
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0},
            padding: {paddingTop: 8, paddingRight: 8, paddingBottom: 8, paddingLeft: 0},
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
            margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0},
            padding: {paddingTop: 8, paddingRight: 8, paddingBottom: 8, paddingLeft: 8},
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
        margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0},
        padding: {paddingTop: 0, paddingRight: 16, paddingBottom: 0, paddingLeft: 16},
      },
    },
    children: [
      {
        name: 'ph',
        props: {
          id: 'ph',
          style: {
            margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0},
            padding: {paddingTop: 8, paddingRight: 0, paddingBottom: 8, paddingLeft: 0},
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
        margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0},
        padding: {paddingTop: 16, paddingRight: 16, paddingBottom: 16, paddingLeft: 16},
      },
      'just-content': 'space-between',
    },
    children: [
      {
        name: 'img',
        props: {
          id: 'img',
          style: {margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0}},
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
          style: {margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0}},
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
          style: {margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0}},
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
          style: {margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0}},
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
        margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0},
        padding: {paddingTop: 0, paddingRight: 16, paddingBottom: 16, paddingLeft: 16},
      },
    },
    children: [
      {
        name: 'img',
        props: {
          id: 'img',
          style: {margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0}},
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
            margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0},
            padding: {paddingTop: 8, paddingRight: 8, paddingBottom: 8, paddingLeft: 8},
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
        margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0},
        padding: {paddingTop: 0, paddingRight: 16, paddingBottom: 0, paddingLeft: 16},
      },
    },
    children: [
      {
        name: 'img',
        props: {
          id: 'img',
          style: {margin: {marginTop: 4, marginRight: 0, marginBottom: 0, marginLeft: 0}},
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
            margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0},
            padding: {paddingTop: 8, paddingRight: 8, paddingBottom: 8, paddingLeft: 8},
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
        margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0},
        padding: {paddingTop: 0, paddingRight: 16, paddingBottom: 0, paddingLeft: 16},
      },
    },
    children: [
      {
        name: 'img',
        props: {
          id: 'img',
          style: {margin: {marginTop: 4, marginRight: 0, marginBottom: 0, marginLeft: 0}},
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
            margin: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0},
            padding: {paddingTop: 8, paddingRight: 8, paddingBottom: 8, paddingLeft: 8},
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
