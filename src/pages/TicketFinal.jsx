import "../style.css";
import { useButtonContext } from "../provider/contextButton";
const TicketFinal = () => {
    const {currentMovie } = useButtonContext();
    const {ticketTime } = useButtonContext();
    const {ticketCount } = useButtonContext();
    const {ticketSeat } = useButtonContext();
    const {ticketBtn,setTicketBtn } = useButtonContext();
  return (
    <span className={ticketBtn == "step4" ? "active" : "dispNone"}>
      <div>
        <div>NAME OF THE MOVIE: {currentMovie.name}</div>
        <div>LOCATION: {ticketTime.location}</div>
        <div>TIME: {ticketTime.time}</div>
        <div>TICKET:</div>
        <div>Adult x {ticketCount.adult} = {ticketCount.adult * 10000}</div>
        <div>Child x {ticketCount.child} = {ticketCount.child * 7000}</div>
        <div>Seat: {ticketSeat.map(el=>{
            return(<div>row: {el.row} col:{el.col} </div>)
        })}</div>

      </div>
      <div className="ticketRightDiv flex">
                <button onClick={()=> setTicketBtn('step3')}> Back </button>
                <button  onClick={()=> setTicketBtn('step5')}> Go Payment section </button>
            </div>
    </span>
  );
};
export default TicketFinal;
