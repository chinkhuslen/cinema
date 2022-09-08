import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ButtonProvider } from "./provider/contextButton";
import { UserDataProvider } from "./provider/contextUserData";
import {Stopwatch} from './stopwatch';
import {PrimeNumberN} from './primeNumberN';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ButtonProvider>
     <UserDataProvider>
    <App />
    {/* <Stopwatch/> */}
    {/* <PrimeNumberN/> */}
    </UserDataProvider>
     </ButtonProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
