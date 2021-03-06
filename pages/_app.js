import App from 'next/app';

import '../styles/global.scss';

import React from 'react';
import Router from 'next/router';
import Load from '../src/components/load/load'; // example


Router.onRouteChangeStart = () => {
    console.log('onRouteChangeStart Triggered');
    <Load />;

};

Router.onRouteChangeComplete = () => {
    console.log('onRouteChangeComplete Triggered');
    <Load />;

};

Router.onRouteChangeError = () => {
    console.log('onRouteChangeError Triggered');
    <Load />;

};

export default App;