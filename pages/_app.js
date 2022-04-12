import App from "next/app";
import { CartProvider } from "../components/Cart";
import "../public/css/bootstrap.min.css";
import "../public/css/keycense.css";
import { Head } from "../components/Head";
import { Footer } from "../components/Footer";
import db from "../firebase/firebase";
import React, { createContext, useEffect } from "react";
import i18next from "i18next";

i18next.init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: {
        key: "hello world",
      },
    },
  },
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const DbFirebase = React.createContext(db);
    return (
      <React.StrictMode>
        <DbFirebase.Provider db={db}>
          <i18next>
            <CartProvider>
              <Head />
              <Component {...pageProps} db={db} />
              <Footer />
            </CartProvider>
          </i18next>
        </DbFirebase.Provider>
      </React.StrictMode>
    );
  }
}

export default MyApp;
