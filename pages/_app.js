import Head from 'next/head'
import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'

import withRematch from '../src/rematch/withRematch'

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Provider store={reduxStore}>
        <>
          <Head>
            <link
              rel='apple-touch-icon'
              sizes='57x57'
              href='/manifest/apple-icon-57x57.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='60x60'
              href='/manifest/apple-icon-60x60.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='72x72'
              href='/manifest/apple-icon-72x72.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='76x76'
              href='/manifest/apple-icon-76x76.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='114x114'
              href='/manifest/apple-icon-114x114.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='120x120'
              href='/manifest/apple-icon-120x120.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='144x144'
              href='/manifest/apple-icon-144x144.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='152x152'
              href='/manifest/apple-icon-152x152.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/manifest/apple-icon-180x180.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='192x192'
              href='/manifest/android-icon-192x192.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/manifest/favicon-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='96x96'
              href='/manifest/favicon-96x96.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/manifest/favicon-16x16.png'
            />
            <link rel='manifest' href='/manifest/manifest.json' />
            <meta name='msapplication-TileColor' content='#ffffff' />
            <meta
              name='msapplication-TileImage'
              content='/manifest/ms-icon-144x144.png'
            />
            <meta name='theme-color' content='#ffffff' />
            <link href='/css/base.min.css' rel='stylesheet' />
          </Head>
          <Component {...pageProps} />
        </>
      </Provider>
    )
  }
}

export default withRematch(MyApp)
