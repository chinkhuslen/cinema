import "../style.css";
import { useButtonContext } from "../provider/contextButton";
import social from "../provider/social.jpg"
import tdb from "../provider/tdb.jpg"
const TicketPayment = () => {
    const {currentMovie } = useButtonContext();
    const {ticketTime } = useButtonContext();
    const {ticketCount } = useButtonContext();
    const {ticketSeat } = useButtonContext();
    const {ticketBtn,setTicketBtn } = useButtonContext();
  return (
    <span className={ticketBtn == "step6" ? "active" : "dispNone"}>
      <div>
        <h1>Thank you!</h1>
        <div className="center">Social Pay<img className="qr" src={social}/></div>
        <div className="center">TDB Pay<img className="qr" src={tdb}/></div>
      </div>
    </span>
  );
};
export default TicketPayment;
