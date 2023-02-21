import React, {useState} from 'react'
import {CloseOutlined} from '@ant-design/icons'
import {Tabs} from 'antd'
import {IComponent, IPageSetting} from '../../type'
import {PropsEditor} from './PropsEditor'
import style from './index.module.scss'
import FnEditor from './FnEditor'

const {TabPane} = Tabs

interface IProps {
  component: IComponent | null
  componentIndex: number
  setting: IPageSetting | null
  onPropsChange(props: Pick<IComponent, 'props'>): void
  onFunctionsChange(): void
  onSettingChange(arg: IPageSetting): void
  onClose(): void
}

export const Editor: React.FC<IProps> = ({
  component = null,
  onPropsChange,
  onFunctionsChange,
  onClose,
}) => {
  // console.info(componentIndex, '页面编辑:componentIndex', component)
  const [keys, setKeys] = useState('')

  const getTabs = e => {
    // console.info(e)
    setKeys(e)
  }

  return (
    <div className={style.wrapper}>
      <h3>
        <span>编辑器</span>
        <CloseOutlined onClick={onClose} />
      </h3>
      <main>
        <Tabs defaultActiveKey="props" onChange={getTabs} size="small">
          <TabPane key="props" tab="属性">
            <PropsEditor component={component} onChange={onPropsChange} />
          </TabPane>
          <TabPane key="function" tab="函数">
            <FnEditor
              contents={component?.props}
              fns={(component && component.fns) || component?.defaultFns || ''}
              key={keys}
              onChange={fns => {
                if (!component) {
                  return
                }
                component.fns = fns
                onFunctionsChange()
              }}
            />
          </TabPane>
          {/* <TabPane key="setting" tab="页面设置">
            <SettingEditor onChange={onSettingChange} setting={setting} />
          </TabPane> */}
        </Tabs>
      </main>
    </div>
  )
}
