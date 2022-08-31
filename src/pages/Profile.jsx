import "../style.css";
import { useButtonContext } from "../provider/contextButton";
import { useRef, useState } from "react";
import {sendOTP,checkOTP} from "../firebase";
import { BrowserRouter as Router, Route, Link, Routes,useNavigate } from "react-router-dom";


const Profile = () => {
  return (
    <span>
      <div className="center">
        Profile imnida
      </div>
    </span>
  );
};
export default Profile;
