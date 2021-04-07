import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

function Head({ title }) {
  return (
    <Head>
      
      <title>
        {title}
      </title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="StackView - Desenvolvimento Full-Stack, Design, Engenharia" key="title" />
      <meta property="og:description" content="Automação, Iot e Full-Stack, Desenvolvimento Sistemas de controle e manutenção, Aplicativos, PWA, websites responsivos e gestão de dados" key="description" />
      <meta property="og:image" content="https://stackview.com.br/preview.png" />
      <meta property="og:image:type" content="image/png" />

      <meta name="description" content="Automação, Iot e Full-Stack, Desenvolvimento Sistemas de controle e manutenção, Aplicativos, PWA, websites responsivos e gestão de dados" />
      <meta name="keywords" content="engenharia, programação, webdesing, dev, automação, internet das coisas, iot, full-stack, desenvolvimento, controle, manutenção, softwares, aplicativos, pwa, website, site, responsivo, banco de dados, dados, sistemas, sensores, embarcados, sistemas digitais, webdesign, design, marketing, digital" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link rel="image_src" href="/preview.png" />

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="StackView - Desenvolvimento Full-Stack, Design, Engenharia" />
      <meta name="twitter:description" content="Automação, Iot e Full-Stack, Desenvolvimento Sistemas de controle e manutenção, Aplicativos, PWA, websites responsivos e gestão de dados"  />
      <meta name="twitter:image" content="https://stackview.com.br/ogp.png" />


      <meta name="theme-color" content="#000000" />

      <meta name="msapplication-navbutton-color" content="#000000" />

      <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />

      <meta property="og:locale" content="pt-br" />
      <meta httpEquiv="Content-Language" content="pt-br" />
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
      <link rel="preload" as="image" href="/disk.png"/>
      <link rel="preload" as="image" href="/nodisk.png"/>
      <link rel="preload" as="image" href="/parallax.gif"/>
    </Head >
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Head;