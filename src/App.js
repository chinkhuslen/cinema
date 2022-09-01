import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./style.css";
import BuyTicket from './pages/BuyTicket.jsx'
import Home from './pages/Home.jsx'
import { useUserDataContext } from "./provider/contextUserData";
import LogInPage from "./pages/LogIn";
import SignUpPage from "./pages/SignUp";
import OTPlogIn from "./pages/OTPlogIn";
import Profile from "./pages/Profile";

export default function App() {
  const { userEntered } = useUserDataContext();
  return (

    <Router>
      <div>
        <nav className="nav">
          <div><h1>Chinkhuslen's Cinema</h1></div>
          <div className="navBtns">
          <Link to="/"><div>Эхлэл</div></Link>
          <Link to="/"><div>Үнэ урамшуулал</div> </Link>
          {userEntered ? <Link to="/Profile"><div>Profile</div></Link>:<Link to="/LogIn"><div>Log-In</div></Link>}
          
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/BuyTicket" element={<BuyTicket/>}>
          </Route>
          <Route path="/LogIn" element={<LogInPage/>}>
          </Route>
          <Route path="/SignUp" element={<SignUpPage/>}>
          </Route>
          <Route path="/OTPlogIn" element={<OTPlogIn/>}>
          </Route>
          <Route path="/Profile" element={<Profile/>}>
          </Route>
        </Routes>
      </div>
      
     
    </Router>
  );
}
