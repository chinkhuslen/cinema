import "../style.css";
import { useButtonContext } from "../provider/contextButton";
const TicketNumber = () => {
    const { ticketBtn, setTicketBtn } = useButtonContext();
    const { ticketTime, setTicketTime } = useButtonContext();
    const { ticketCount, setTicketCount } = useButtonContext();
    return (
        <span className={ticketBtn == 'step2' ? "active" : "dispNone"}>
            <div>
                Adult 10000₮ x  <input type="number" min='0' onChange={(event)=>{setTicketCount({child:ticketCount.child, adult:event.target.value})}}></input> = {10000 * ticketCount.adult}<br/>
                Child 7000₮ x <input type="number" min='0' onChange={(event)=>{setTicketCount({child:event.target.value, adult:ticketCount.adult})}}></input> = {7000 * ticketCount.child}
            </div>
            <div className="ticketRightDiv flex">
                <button className={ticketTime != null ? "active  buyTicketBtn" : "dispNone"} onClick={()=> setTicketBtn('')}> Back </button>
                <button className={ticketTime != null ? "active  buyTicketBtn" : "dispNone"} onClick={()=> setTicketBtn('step3')}> Next </button>
            </div>
        </span>
    )
}
export default TicketNumber