import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

function Head({ title }) {
  return (
    <NextHead>
      <title>
        {title}
      </title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="StackView" key="title" />
      <meta name="description" content="Automação, Iot e Full-Stack, Desenvolvimento Sistemas de controle e manutenção, Aplicativos, PWA, websites responsivos e gestão de dados" />
      <meta name="keywords" content="engenharia, programação, webdesing, dev, automação, internet das coisas, iot, full-stack, desenvolvimento, controle, manutenção, softwares, aplicativos, pwa, website, site, responsivo, banco de dados, dados, sistemas, sensores, embarcados, sistemas digitais, webdesign, design, marketing, digital" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link rel="image_src" href="/static/preview.png" />

      <meta name="theme-color" content="#000000"/>

        <meta name="msapplication-navbutton-color" content="#000000"/>

          <meta name="apple-mobile-web-app-status-bar-style" content="#000000"/>
          
          <meta property="og:locale" content="pt-br" />
          <meta http-equiv="Content-Language" content="pt-br" />
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
          <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'></link>
    </NextHead >
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Head;