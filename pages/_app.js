import App from "next/app";
import { CartProvider } from "../components/Cart";
import "../public/css/bootstrap.min.css";
import "../public/css/keycense.css";
import { Head } from "../components/Head";
import { Footer } from "../components/Footer";
import app from "../firebase/firebase";
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



class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.StrictMode>
       
        <i18next>
          <CartProvider>
            <Head />
            <Component {...pageProps} />
            <Footer />
          </CartProvider></i18next>
       
      </React.StrictMode>
    );
  }
}

export default MyApp;
