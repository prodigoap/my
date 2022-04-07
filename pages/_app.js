import App from "next/app";
import { CartProvider } from "../components/Cart";
import "../public/css/bootstrap.min.css";
import "../public/css/keycense.css";
import { Head } from "../components/Head";
import { Footer } from "../components/Footer";
import FirebaseProvider from "../firebase/firebase";
import React, { createContext, useEffect } from "react";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.StrictMode>
        <FirebaseProvider>
          <CartProvider>
            <Head />
            <Component {...pageProps} />
            <Footer />
          </CartProvider>
        </FirebaseProvider>
      </React.StrictMode>
    );
  }
}

export default MyApp;
