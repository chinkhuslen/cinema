import "../style.css";
import { useButtonContext } from "../provider/contextButton";
import { useRef, useState } from "react";
import {sendOTP,checkOTP} from "../firebase";
import { BrowserRouter as Router, Route, Link, Routes,useNavigate } from "react-router-dom";
import { useUserDataContext } from "../provider/contextUserData";


const OTPlogIn = () => {
    const inputValue = useRef(null);
    const [checkCodeSec,setCheckCodeSec] = useState(false);
    const {setUserEntered} = useUserDataContext();
    const navigate = useNavigate();

    const onButtonClick = async () =>{
        
        if(checkCodeSec){
            const OTPCode = inputValue.current.value;
            const status = await checkOTP(OTPCode)
            console.log(status)
            if(status){
                setUserEntered(true);
                navigate('/')
            }
        }else{
            const phoneNumber = inputValue.current.value;
            sendOTP(phoneNumber)
            setCheckCodeSec(true);
        }
    }
    
  return (
    <span>
      <div className="center">
        <div className="signUp">
          <div className="center"><b>OTP Log-In</b></div>
          <div>Phone number</div>
          <input  ref={inputValue} className="logInInp" placeholder="Phone number"/>
          {checkCodeSec ? <input  ref={inputValue} className="logInInp" placeholder="Phone number"/> : ''}
          <button className="logInBtn mt-10" onClick={() => onButtonClick()}>{checkCodeSec ? "Verify Code":"Send message"}</button>
          <div id='recaptcha-container'></div>
        </div>
      </div>
    </span>
  );
};
export default OTPlogIn;
