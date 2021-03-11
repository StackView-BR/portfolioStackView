import App from 'next/app';

import '../styles/global.scss';
import '../styles/deviceglobal.scss';

import React from 'react';
import Router from 'next/router';


Router.onRouteChangeStart = () => {
    console.log('onRouteChangeStart Triggered');

};

Router.onRouteChangeComplete = () => {
    console.log('onRouteChangeComplete Triggered');

};

Router.onRouteChangeError = () => {
    console.log('onRouteChangeError Triggered');

};

export default App;