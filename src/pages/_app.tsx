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
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>πΈ</text></svg>"
        />
        <title>κ³ μλμμ μλΆμ¬ μ¦λͺμ</title>
        <meta
          name="description"
          content="μλΆμ¬μ μ€μ€λ‘κ° λ§λ€μ΄λκ°λ κ²μλλ€."
        />
        <meta property="og:title" content="κ³ μλμμ μλΆμ¬ μ¦λͺμ" />
        <meta
          property="og:description"
          content="μλΆμ¬μ μ€μ€λ‘κ° λ§λ€μ΄λκ°λ κ²μλλ€."
        />
        <meta property="og:image" content="/preview.png" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
