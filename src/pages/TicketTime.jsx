import "../style.css";
import { useButtonContext } from "../provider/contextButton";
const TicketTime = () => {
    const { currentMovie } = useButtonContext();
    const { ticketTime,setTicketTime } = useButtonContext();
    return (
        <span>
            {currentMovie.locationAndTime.map((el) => {
            return (
                <div>
                    <h3>{el.locationName}</h3>
                    <div className="flex flexWrap">
                        {el.time.map((el2) => {
                            return (<div className="availableTime" onClick={() => { setTicketTime({location:el.locationName, time:el2})}}>{el2}</div>)
                        })}
                    </div>
                </div>
            )
        })}
        </span>
    )
}
export default TicketTime