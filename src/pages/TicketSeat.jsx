import "../style.css";
import { useButtonContext } from "../provider/contextButton";
const TicketSeat = () => {
  const { ticketBtn, setTicketBtn } = useButtonContext();
  const { ticketSeat, setTicketSeat } = useButtonContext();
  const arr = new Array(10).fill(new Array(10).fill(0));
  const seatReserve = (el,i,j)=>{

    el.getAttribute('seatstatus') == 'notFree' ? alert("not free. choose different seat"):setTicketSeat([...ticketSeat,{row:i,col:j}]);
    el.classList.toggle('activeTicketSeat');
    el.setAttribute('seatstatus', el.getAttribute('seatstatus') == 'pending' ? 'free':'pending');
  }

  return (
    <span className={ticketBtn == "step3" ? "active" : "dispNone"}>
      <div>
        <div className="center ticketRightDiv border1px">Screen</div>
        {arr.map((el, i) => {
          return (
            <div className="flex center">
                <div className="box50 center">{i+1}</div>
              {el.map((el2, j) => {
                return <div className="box25 center border1px" seatstatus="free" seatrow ={i+1} seatcol = {j+1} onClick={(event) =>  seatReserve(event.target, i+1,j+1)}>{j+1}</div>;
              })}
            </div>
          );
        })}
      </div>
      <div className="ticketRightDiv flex">
                <button className={ticketSeat != null ? "active  buyTicketBtn" : "dispNone"} onClick={()=> setTicketBtn('step2')}> Back </button>
                <button className={ticketSeat != null ? "active  buyTicketBtn" : "dispNone"} onClick={()=> setTicketBtn('step4')}> Next </button>
            </div>
    </span>
  );
};
export default TicketSeat;
