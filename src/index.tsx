import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDG6h0mPjLtyfXh8E3G45jctU6_F1Wu1tY',
  authDomain: 'blog-project-8481d.firebaseapp.com',
  projectId: 'blog-project-8481d',
  storageBucket: 'blog-project-8481d.appspot.com',
  messagingSenderId: '15026441755',
  appId: '1:15026441755:web:39dcacdbca697c503a32be',
  measurementId: 'G-HFVRZC462H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
