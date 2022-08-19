import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./style.css";
import Zahial from './zahial.jsx'
import Home from './home.jsx'
import { ButtonProvider } from "./contextButton";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAvgO3zjGmUonvUpExUy4L8ZXzjJcYK7ZI",
  authDomain: "cinema-ch.firebaseapp.com",
  projectId: "cinema-ch",
  storageBucket: "cinema-ch.appspot.com",
  messagingSenderId: "625690063199",
  appId: "1:625690063199:web:ea3fd84865f79aab6706ea",
  measurementId: "G-281X4WFEFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (

    <Router>
      <ButtonProvider>
      <div>
        <nav className="nav">
          <div><h1>Chinkhuslen's Cinema</h1></div>
          <div className="navBtns">
            
          <Link to="/"><div>Эхлэл</div></Link>
            
          <Link to="/"><div>Coming soon</div></Link>
            
          <Link to="/zahial"><div>Захиалах</div> </Link>
            
          <Link to="/"><div>Үнэ урамшуулал</div> </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/zahial" element={<Zahial/>}>
          </Route>
        </Routes>
      </div>
      </ButtonProvider>
    </Router>
  );
}
