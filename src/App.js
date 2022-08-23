import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./style.css";
import BuyTicket from './pages/BuyTicket.jsx'
import Home from './pages/Home.jsx'
import { ButtonProvider } from "./provider/contextButton";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs,where,query } from "firebase/firestore";

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

const cinemaData = async () =>{
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  try {
    const querySnapshot = await getDocs(query(collection(db, "currentMovies"))); 
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
    } catch (error) {
      console.error(error)
    }
}
// cinemaData()

export default function App() {
  return (

    <Router>
      <ButtonProvider>
      <div>
        <nav className="nav">
          <div><h1>Chinkhuslen's Cinema</h1></div>
          <div className="navBtns">
          <Link to="/"><div>Эхлэл</div></Link>
          <Link to="/BuyTicket"><div>Захиалах</div> </Link>
          <Link to="/"><div>Үнэ урамшуулал</div> </Link>
          <Link to="/"><div>Log-In</div></Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/BuyTicket" element={<BuyTicket/>}>
          </Route>
        </Routes>
      </div>
      </ButtonProvider>
    </Router>
  );
}
