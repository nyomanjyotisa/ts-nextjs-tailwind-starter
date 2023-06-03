import { AppProps } from 'next/app';
import Script from 'next/script';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src={`/js/all-js-libraries.js?foo=${Math.round(
          Math.random() * 100
        )}`}
      ></Script>
    </>
  );
}

export default MyApp;
