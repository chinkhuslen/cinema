import "../style.css";
import { useButtonContext } from "../provider/contextButton";
const TicketPayment = () => {
    const {currentMovie } = useButtonContext();
    const {ticketTime } = useButtonContext();
    const {ticketCount } = useButtonContext();
    const {ticketSeat } = useButtonContext();
    const {ticketBtn,setTicketBtn } = useButtonContext();
  return (
    <span className={ticketBtn == "step5" ? "active" : "dispNone"}>
      <div>
        <div>First Name: <input type="text"></input></div>
        <div>Last Name: <input type="text"></input></div>
        <div>Email: <input type="email"></input></div>
        <div>Phone Number: <input type="number"></input></div>
      </div>
      <div className="ticketRightDiv flex">
                <button onClick={()=> setTicketBtn('step4')}> Back </button>
                <button  onClick={()=> setTicketBtn('step6')}>Checkout </button>
            </div>
    </span>
  );
};
export default TicketPayment;
