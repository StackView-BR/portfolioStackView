import '../styles/global.scss';
import '../styles/deviceglobal.scss';

import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title>
        StackView
      </title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="StackView - Desenvolvimento Full-Stack, Design, Engenharia" key="title" />
      <meta property="og:description" content="Automação, Iot e Full-Stack, Desenvolvimento Sistemas de controle e manutenção, Aplicativos, PWA, websites responsivos e gestão de dados" key="description" />
      <meta property="og:image" content="viewicons/preview.png" />
      <meta property="og:image:type" content="image/png" />

      <meta name="description" content="Automação, Iot e Full-Stack, Desenvolvimento Sistemas de controle e manutenção, Aplicativos, PWA, websites responsivos e gestão de dados" />
      <meta name="keywords" content="engenharia, programação, webdesing, dev, automação, internet das coisas, iot, full-stack, desenvolvimento, controle, manutenção, softwares, aplicativos, pwa, website, site, responsivo, banco de dados, dados, sistemas, sensores, embarcados, sistemas digitais, webdesign, design, marketing, digital" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link rel="image_src" href="viewicons/preview.png" />

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="StackView - Desenvolvimento Full-Stack, Design, Engenharia" />
      <meta name="twitter:description" content="Automação, Iot e Full-Stack, Desenvolvimento Sistemas de controle e manutenção, Aplicativos, PWA, websites responsivos e gestão de dados"  />
      <meta name="twitter:image" content="viewicons/ogp.png" />


      <meta name="theme-color" content="#000000" />

      <meta name="msapplication-navbutton-color" content="#000000" />

      <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />

      <meta property="og:locale" content="pt-br" />
      <meta httpEquiv="Content-Language" content="pt-br" />

      <meta name="google-site-verification" content="R6nk2kHaIyu3u4qxfmfhB8BSLyZBeY3OIDW6qc7YT7o" />
      <link
        rel="preload"
        href="/fonts/REZ.woff"
        as="font"
        type="font/woff"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/XXIX.woff"
        as="font"
        type="font/woff"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Roboto.ttf"
        as="font"
        type="font/ttf"
        crossOrigin=""
      />
      <link rel="preload" as="image" href="viewicons/disk.png"/>
      <link rel="preload" as="image" href="viewicons/nodisk.png"/>      
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp