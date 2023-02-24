/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, {useState} from 'react'
import clone from 'lodash/clone'
import cls from 'classnames'
import {Mode, IComponent, IPageSetting} from './type'
import {Header} from './components/Header'
import {Pannel} from './components/Pannel'
import {Preview} from './components/Preview'
import {Editor as PropsEditor} from './components/Editor'
import style from './index.module.scss'
import {createHtml} from '@/global/tools'
import {downloadHtml} from '@/global/utils'

const isProd = process.env.NODE_ENV === 'production'

interface IProps {
  components?: IComponent[]
}

export const Editor: React.FC<IProps> = ({components: defaultComponents = []}) => {
  const [, setCount] = useState<number>(-1)
  const unsafeUpdate = () => setCount(v => v + 1)
  const [loading, setLoading] = useState<boolean>(false)

  const [mode, setMode] = useState<Mode>('edit')
  const [isPre, setPre] = useState({isShow: false, content: ''})
  const [componentPannelVisible, setComponentPannelVisible] = useState<boolean>(true)
  const [propsEditorVisible, setPropsEditorVisible] = useState<boolean>(true)
  const [pageSetting, setPageSetting] = useState<IPageSetting>(Object.create(null))
  const [components, setComponents] = useState<IComponent[]>(defaultComponents)
  const [current, setCurrent] = useState<IComponent | null>(null)
  const [currentIndex, setCurrentIndex] = useState(-1)

  // 添加组件
  const addComponent = component => {
    setComponents(components => [...components, {...component, id: `${components.length}`}])
  }

  // 复制组件
  const copy = index => {
    setComponents(components => {
      const target = clone(components[index])
      target.props = target.defaultProps
      target.id = `${components.length}`
      target.fns = target.defaultFns
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      components.splice(index + 1, 0, target)
      return components
    })
    unsafeUpdate()
  }

  // 编辑当前组件 props
  const editCurrentComponentProps = newProps => {
    setComponents(components => {
      const target = clone(components[currentIndex])
      target.props = newProps
      console.info(target.props, '-----six')
      components.splice(currentIndex, 1, target)
      setCurrent(target)
      return components
    })
    setPropsEditorVisible(true)
    unsafeUpdate()
  }

  // 交换两组件位置（拖拽）
  const swapComponent = (startIndex, endIndex) => {
    setComponents(components => {
      const [removed] = components.splice(startIndex, 1)
      components.splice(endIndex, 0, removed)
      return components
    })
    unsafeUpdate()
  }

  // 移动组件（向上或者向下）
  const moveComponent = (component, index, direction) => {
    if (direction === 'up') {
      if (index <= 0) {
        return [component, index]
      }
      setComponents(components => {
        const prev = components[index - 1]
        components.splice(index - 1, 2, component, prev)
        return components
      })
      unsafeUpdate()
      return [component, index - 1]
    }
    if (index >= components.length - 1) {
      return [component, index]
    }
    setComponents(components => {
      const next = components[index + 1]
      components.splice(index, 2, next, component)
      return components
    })
    unsafeUpdate()
    return [component, index + 1]
  }

  // 删除组件
  const deleteComponent = index => {
    setComponents(components => {
      components.splice(index, 1)
      return components
    })
    // 编辑器当前组件删除
    if (currentIndex === index && current) {
      setCurrent(null)
    }
    unsafeUpdate()
  }

  const save = () => {
    setLoading(true)
    const data = components.map((component: any) => {
      return {
        id: component.id,
        name: component.name,
        props: component.props,
        schema: component.schema,
        fns: component.fns,
      }
    })
    console.info(createHtml(data), '------------------>')
    setLoading(false)
    downloadHtml(createHtml(data))
  }

  const onPre = () => {
    const data = components.map((component: any) => {
      return {
        id: component.id,
        name: component.name,
        props: component.props,
        schema: component.schema,
        fns: component.fns,
      }
    })
    console.info(data, '------------------>')
    setPre({isShow: true, content: createHtml(data)})
  }

  console.info(isPre.content, 'components123')
  return (
    <div className={style.wrapper}>
      {/* 头部区域 */}
      <Header loading={loading} onPreview={() => onPre()} onSave={save} />
      <main>
        <div
          className={cls(
            style.pannelWrapper,
            style.left,
            componentPannelVisible ? style.isVisible : false
          )}>
          {/* 左侧组件区域 */}
          <Pannel
            onClose={() => setComponentPannelVisible(false)}
            onOpen={() => setComponentPannelVisible(true)}
            onSelect={component => {
              addComponent(component)
              setComponentPannelVisible(true)
            }}
            visible={componentPannelVisible}
          />
        </div>
        {/* 预览组件区 */}
        <Preview
          components={components}
          mode={mode}
          onClosePreview={() => setMode('edit')}
          onCopy={copy}
          onDelete={deleteComponent}
          onEdit={index => {
            setCurrent(components[index])
            setCurrentIndex(index)
            setPropsEditorVisible(true)
          }}
          onMove={moveComponent}
          onSwap={swapComponent}
          setting={pageSetting}
        />
        <div
          className={cls(
            style.pannelWrapper,
            style.right,
            current && propsEditorVisible ? style.isVisible : false
          )}>
          {/* 右边编辑区 */}
          <PropsEditor
            component={current}
            componentIndex={currentIndex}
            onClose={() => setPropsEditorVisible(false)}
            onFunctionsChange={unsafeUpdate}
            onPropsChange={editCurrentComponentProps}
            onSettingChange={setting => {
              setPageSetting(setting)
              unsafeUpdate()
            }}
            setting={pageSetting}
          />
        </div>
      </main>

      {isPre.isShow && (
        <div className={style.preview}>
          {/* <div className={style.previewContent} dangerouslySetInnerHTML={{__html: isPre.content}} /> */}
          <iframe className={style.previewContent} srcDoc={isPre.content} />
          <div className={style.close} onClick={() => setPre({isShow: false, content: ''})}>
            关闭预览
          </div>
        </div>
      )}
    </div>
  )
}
