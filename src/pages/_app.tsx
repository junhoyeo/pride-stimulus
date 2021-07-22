import '../styles/fonts.css';

import React from 'react';
import Head from 'next/head';

import { GlobalStyle } from '../components/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💸</text></svg>"
        />
        <title>고소득자의 자부심 증명서</title>
        <meta
          name="description"
          content="자부심은 스스로가 만들어나가는 것입니다."
        />
        <meta property="og:title" content="고소득자의 자부심 증명서" />
        <meta
          property="og:description"
          content="자부심은 스스로가 만들어나가는 것입니다."
        />
        <meta property="og:image" content="/preview.png" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
