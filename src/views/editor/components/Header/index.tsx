import React from 'react'
import {Button} from 'antd'
import {ThemeToggle} from './ThemeToggle'
import style from './index.module.scss'
import {useRouter} from 'next/router'

interface IProps {
  loading: boolean
  onPreview(): void
  onSave(): void
}

export const Header: React.FC<IProps> = ({loading, onPreview, onSave}) => {
  const router = useRouter()

  return (
    <header className={style.wrapper}>
      <div className={style.logo} onClick={() => router.push('/lists')}>
        H5 网页
      </div>
      <div>
        <ThemeToggle />
        <Button onClick={onPreview} type="text">
          预览
        </Button>
        <Button loading={loading} onClick={onSave} type="primary">
          保存
        </Button>
      </div>
    </header>
  )
}
