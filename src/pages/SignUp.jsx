import "../style.css";
import { useButtonContext } from "../provider/contextButton";
const SignUpPage = () => {
  return (
    <span>
      <div className="center">
        <div className="signUp">
          <div className="center"><b>Burtguuleh</b></div>
          <div className="mt-30">Last name</div>
          <input  className="logInInp" placeholder="Ovog"/>
          <div>First name</div>
          <input  className="logInInp" placeholder="Ner"/>
          <div>Phone number</div>
          <input  className="logInInp" placeholder="Phone number"/>
          <div>Email</div>
          <input  className="logInInp" placeholder="abc@email.com"/>
          <div>Password</div>
          <input  type="password" className="logInInp"placeholder="Password"/>
          <div>Re-enter Password</div>
          <input  type="password" className="logInInp"placeholder="Password"/>
          <button className="logInBtn mt-30">Sign-Up</button>
        </div>
      </div>
    </span>
  );
};
export default SignUpPage;
