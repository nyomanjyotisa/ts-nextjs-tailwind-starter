import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='id'>
      <Head>
        <link
          rel='preload'
          href='/fonts/inter-var-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>
      <body>
        <link rel="stylesheet" href="/css/all-css-libraries.css" />
        <link rel="stylesheet" href="/style.css" />
        <Main />
        <NextScript />
        <Script src="/js/all-js-libraries.js" />
        <Script src="/js/active.js" />
      </body>
    </Html>
  );
}
