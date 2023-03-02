import cls from 'classnames'
import React, {useState, useRef, useEffect} from 'react'
import {Card, Divider, Modal, Tooltip} from 'antd'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  DeleteOutlined,
  CopyOutlined,
  CloseOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
import {Mode, IComponent, IPageSetting} from '../../type'
import {transformPageStyle} from '../../renderPage'
import {renderComponent} from './renderComponent'
import style from './index.module.scss'

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  border: 'none',
  background: isDragging ? '#fff' : 'transparent',
  ...draggableStyle,
})

const getListStyle = isDraggingOver => ({
  background: 'transparent',
  padding: 0,
  width: '100%',
})

const gridStyle = {width: '25%', textAlign: 'center', marginRight: '10px'} as React.CSSProperties

const COMPONENT_COVER_WRAPPER_ID_PREFIX = 'ramiko_component_cover_wrapper_'

export const Preview: React.FC<any> = ({
  setting = null,
  components = [],
  mode = 'edit',
  onClosePreview,
  onMove,
  onSwap,
  onEdit,
  onCopy,
  onDelete,
  updateComponents,
  updateChildProps,
  childrenId,
}) => {
  const isEdit = mode === 'edit' || mode === 'editChild'
  const pageStyle = transformPageStyle({setting})
  delete pageStyle.minHeight
  delete pageStyle.height
  const ref = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(-1)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const el = ref.current
    const parent = el.parentNode as HTMLDivElement
    const timer = setTimeout(() => {
      parent.scrollTo(0, el.scrollHeight)
    }, 0)

    return () => {
      clearTimeout(timer)
    }
  }, [components])

  const moveComponent = direction => {
    let newComponent
    let newIndex

    if (direction === 'up') {
      if (!current || currentIndex < 0) return
      ;[newComponent, newIndex] = onMove(current, currentIndex, 'up')
    } else {
      if (!current || currentIndex < 0 || currentIndex >= components.length - 1) return
      ;[newComponent, newIndex] = onMove(current, currentIndex, 'down')
    }

    setCurrent(newComponent)
    setCurrentIndex(newIndex)
  }

  const handleSwap = (dragIndex, hoverIndex) => {
    onSwap(dragIndex, hoverIndex)
    setCurrentIndex(hoverIndex)
  }

  const copy = () => {
    if (currentIndex > -1) {
      onCopy(currentIndex)
    }
  }

  const deleteComponent = () => {
    if (!current || currentIndex < 0) {
      return
    }
    onDelete(currentIndex)
    setCurrentIndex(-1)
    setCurrent(null)
  }

  const onDragEnd = result => {
    if (!result.destination) {
      return
    }

    handleSwap(+result.source.index, +result.destination.index)
  }

  const addChildren = (type: string, i: number) => () => {
    // console.info(type, i, components)
    updateComponents(type, i)
  }

  // 打开子组件弹窗
  const addChildComponent = (i: number) => () => {
    // console.info('six', i)
    const modals = Modal.info({
      style: {left: 20, bottom: 20},
      title: '可选择下列子组件插入块级组件中',
      content: (
        <div className={style.confirm5e}>
          <div
            onClick={() => {
              addChildren('ph', i)()
              modals.destroy()
            }}>
            段落
          </div>
          <div
            onClick={() => {
              addChildren('img', i)()
              modals.destroy()
            }}>
            图片
          </div>
          <div
            onClick={() => {
              addChildren('block', i)()
              modals.destroy()
            }}>
            块级组件
          </div>
        </div>
      ),
      onOk: () => {
        //
      },
    })
  }

  const updateProps = (t: any) => {
    // console.info(t, '0000000yyyyyyyttttttt')
    updateChildProps(t)
  }

  // console.info(components, 'components-------------------update')
  return (
    <div className={cls(style.wrapper, isEdit ? false : style.isPreview)} onClick={onClosePreview}>
      <div
        className={cls(style.closePreviewWrapper, isEdit ? false : style.isPreview)}
        onClick={onClosePreview}>
        <CloseOutlined />
      </div>
      <div
        className={cls(style.contentWrapper, isEdit ? false : style.isPreview)}
        ref={ref}
        style={pageStyle}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(droppableProvided, droppableSnapshot) => (
              <div
                ref={droppableProvided.innerRef}
                style={getListStyle(droppableSnapshot.isDraggingOver)}>
                {components.map((component, index) => (
                  <Draggable
                    draggableId={component.id}
                    index={index}
                    key={`${component.id}_${index}`}>
                    {(draggableProvided, draggableSnapshot) => (
                      <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                        style={getItemStyle(
                          draggableSnapshot.isDragging,
                          draggableProvided.draggableProps.style
                        )}>
                        <div
                          className={cls(
                            style.componentWrapper,
                            isEdit ? style.isEdit : false,
                            currentIndex === index ? style.isActive : false
                          )}>
                          {isEdit && (
                            <>
                              <div
                                className={style.componentCoverWrapper}
                                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                                id={COMPONENT_COVER_WRAPPER_ID_PREFIX + index}
                                onClick={() => {
                                  setCurrent(component)
                                  setCurrentIndex(index)
                                  onEdit(index)
                                }}>
                                <div className={style.componentInstanceWrapper}>
                                  {renderComponent({
                                    component,
                                    isEdit,
                                    updateProps,
                                    id: `${component.id}_${index}`,
                                    childrenId,
                                  })}
                                </div>
                              </div>
                              {/* 组件操作 */}
                              {mode === 'edit' && (
                                <div className={style.toolboxWrapper}>
                                  <ul>
                                    <li>
                                      <Tooltip placement="right" title="上移">
                                        <ArrowUpOutlined onClick={() => moveComponent('up')} />
                                      </Tooltip>
                                      <Divider className={style.dividerWrapper} />
                                      <Tooltip placement="right" title="下移">
                                        <ArrowDownOutlined onClick={() => moveComponent('down')} />
                                      </Tooltip>
                                    </li>
                                    <Tooltip placement="right" title="复制">
                                      <li>
                                        <CopyOutlined onClick={copy} />
                                      </li>
                                    </Tooltip>
                                    <Tooltip placement="right" title="删除">
                                      <li>
                                        <DeleteOutlined onClick={deleteComponent} />
                                      </li>
                                    </Tooltip>
                                    {component.name === 'Block' && (
                                      <Tooltip placement="right" title="添加子组件">
                                        <li>
                                          <UserAddOutlined onClick={addChildComponent(index)} />
                                        </li>
                                      </Tooltip>
                                    )}
                                  </ul>
                                </div>
                              )}
                            </>
                          )}
                          {/* <div className={style.componentInstanceWrapper}>
                            {renderComponent({component, isEdit})}
                          </div> */}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
}
