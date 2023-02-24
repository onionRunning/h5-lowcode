import React, {useEffect, useRef} from 'react'
import {NextPage} from 'next'
import {renderPage} from '@/views/editor'
import style from './index.module.scss'

const Page: NextPage<any> = ({page}) => {
  return <div className={style.wrapper}>{renderPage(page)}</div>
}

Page.getInitialProps = async ctx => {
  const {id} = ctx.query
  return {page: {}}
}

export default Page
