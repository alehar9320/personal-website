import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import './styles/main.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alexander Harenstam | Personal Website</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta
          name="description"
          content="Alexander Härenstam, personal website.
          SOFTWARE DEVELOPER, CREATIVE THINKER, INNOVATION DRIVER
					GRADUATE OF CHALMERS UNIVERSITY OF TECHNOLOGY.
					Check out portfolio, publications, and more."
        />
        {/*<!-- Android Chrome tab color -->*/}
        <meta name="theme-color" content="#1b1f22" />
        {/*<link rel="stylesheet" href="assets/css/main.css" />*/}
        {/*<!-- PWA Manifesto -->*/}
        <link rel="manifest" href="/manifest.json" />
        {/*<!-- TODO: icon should not be transparent -->*/}
        <link rel="apple-touch-icon" href="images/favico_192x192.png" />
        {/*FAV ICON DEFINED HERE -->*/}
        <link rel="icon" type="image/png" href="images/favico_16x16.png" />
      </Head>
      <div className="app">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
