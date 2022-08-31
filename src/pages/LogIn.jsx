import "../style.css";
import { useButtonContext } from "../provider/contextButton";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const LogInPage = () => {
  return (
    <span>
      <div className="center">
        <div className="logIn">
          <div className="center"><b>Nevtreh</b> </div>
          <input  className="logInInp mt-30" placeholder="Phone number/Email"/>
          <input  type="password" className="mt-10 logInInp"placeholder="Password"/>
          <button  className="logInBtn mt-30">Log in</button>
          <div className="or mt-10 center">OR</div>
          <Link to="/SignUp"><button className="logInBtn mt-10">Sign-Up</button></Link>
          <Link to="/OTPlogIn"><button className="logInBtn mt-10">OTP log-in</button></Link>
        </div>
      </div>
    </span>
  );
};
export default LogInPage;
