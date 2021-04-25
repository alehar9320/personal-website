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
