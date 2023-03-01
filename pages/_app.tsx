import React from 'react'
import App from 'next/app'
import 'plugins'
import 'antd/dist/reset.css'
import 'theme/reset.scss'
import 'theme/var.scss'

class MyApp extends App {
  componentDidMount() {
    try {
      const el = document.querySelector('#holderStyle')
      el.parentNode.removeChild(el)
    } catch (e) {
      // console.info(e)
    }
  }

  componentDidUpdate() {
    try {
      const el = document.querySelector('#holderStyle')
      el.parentNode.removeChild(el)
    } catch (e) {
      // console.info(e)
    }
  }

  render() {
    const {Component, pageProps} = this.props

    return (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: ` * {
      transition: none !important;
    }`,
          }}
          id="holderStyle"
        />
        <Component {...pageProps} />
      </div>
    )
  }
}

export default MyApp
