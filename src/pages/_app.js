import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Guilherme Oliveira - Portifólio</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Cursor />
      <LoadingScreen />
      <ScrollToTop />
      <Component {...pageProps} />

      <Script
        strategy="beforeInteractive"
        id="wow"
        src="/public/js/wow.min.js"
      >
      </Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/public/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/public/js/simpleParallax.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="isotope"
        src="/public/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="lazyOnload" 
        id="initWow" 
        src="/public/js/initWow.js"
      ></Script>
    </>
  );
}

export default MyApp;
