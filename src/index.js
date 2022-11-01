import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyABlbw54L1stlHKi2Cd7o6ypdYT4ruk034",
  authDomain: "gamelive-shop.firebaseapp.com",
  projectId: "gamelive-shop",
  storageBucket: "gamelive-shop.appspot.com",
  messagingSenderId: "937224698102",
  appId: "1:937224698102:web:e876efa576746dc37914d7",
  measurementId: "G-KN2FQNB6BH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


