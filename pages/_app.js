import App from "next/app";
import { CartProvider } from "../components/Cart";
import "../public/css/bootstrap.min.css";
import "../public/css/keycense.css";
import { Head } from "../components/Head";
import { Footer } from "../components/Footer";
import FirebaseProvider from "../firebase/firebase";
import React, { createContext, useEffect } from "react";
import i18next from 'i18next';

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "key": "hello world"
      }
    }
  }
});

console.log(i18next.t('key'));

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.StrictMode>
        <FirebaseProvider>
        <i18next>
          <CartProvider>
            <Head />
            <Component {...pageProps} />
            <Footer />
          </CartProvider></i18next>
        </FirebaseProvider>
      </React.StrictMode>
    );
  }
}

export default MyApp;
