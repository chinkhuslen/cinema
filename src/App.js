import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./style.css";
import BuyTicket from './pages/BuyTicket.jsx'
import Home from './pages/Home.jsx'
import { ButtonProvider } from "./provider/contextButton";

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
