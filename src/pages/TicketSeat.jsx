import "../style.css";
import { useButtonContext } from "../provider/contextButton";
const TicketSeat = () => {
  const { ticketBtn, setTicketBtn } = useButtonContext();
  const { ticketSeat, setTicketSeat } = useButtonContext();
  const arr = new Array(10).fill(new Array(10).fill(0));
  return (
    <span className={ticketBtn == "step3" ? "active" : "dispNone"}>
      <div>
        <div className="center ticketRightDiv border1px">Screen</div>
        {arr.map((el, i) => {
          return (
            <div className="flex center">
                <div className="box50 center">{i+1}</div>
              {el.map((el2, j) => {
                return <div className="box25 center border1px" onClick={(event)=> {setTicketSeat([...ticketSeat,{row:i+1,col:j+1}]);event.target.classList.add('activeTicketSeat')}}>{j+1}</div>;
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
