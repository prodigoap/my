import App from 'next/app'
import { CounterProvider } from '../components/Counter'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = { };

//const appdb = initializeApp(firebaseConfig);
//const db = getFirestore(appdb);
// Initialize Firebase Authentication and get a reference to the service
//const auth = getAuth(appdb);
// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}


const app = initializeApp(firebaseConfig);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    
    return (
      <CounterProvider>
        <Component {...pageProps}  />
      </CounterProvider>
    )
  }
}

export default MyApp
