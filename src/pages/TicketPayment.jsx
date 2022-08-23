import "../style.css";
import { useButtonContext } from "../provider/contextButton";
import {useState} from 'react'
import addDataToFire from "../firebase";
const TicketPayment = () => {
  const [userData, setUserData] = useState({
    name:'',
    email:'',
    phone:'',
  });
  const eventHandler = (event) =>{
    const {name, value} = event.target;
    if(name == 'name')
      setUserData({...userData,name:value});
    
    if(name == 'email')
      setUserData({...userData,email:value})

    if(name == 'phone')
      setUserData({...userData,phone:value})
  }
    const {currentMovie } = useButtonContext();
    const {ticketTime } = useButtonContext();
    const {ticketCount } = useButtonContext();
    const {ticketSeat } = useButtonContext();
    const {ticketBtn,setTicketBtn } = useButtonContext();
    const sendData = () =>{

    }
  return (
    <span className={ticketBtn == "step5" ? "active" : "dispNone"}>
      <div>
        <div>First Name: <input type="text" name='name' onChange={eventHandler}></input></div>
        <div>Email: <input type="email" name='email' onChange={eventHandler}></input></div>
        <div>Phone Number: <input type="number" name='phone' onChange={eventHandler}></input></div>
      </div>
      <div className="ticketRightDiv flex">
                <button onClick={()=> setTicketBtn('step4')}> Back </button>
                <button  onClick={()=> {addDataToFire(userData,ticketTime,currentMovie.name,ticketCount,ticketSeat );setTicketBtn('step6')}}> Finish </button>
            </div>
    </span>
  );
};
export default TicketPayment;
