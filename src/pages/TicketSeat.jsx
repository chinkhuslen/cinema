import "../style.css";
import { useButtonContext } from "../provider/contextButton";
const TicketSeat = () => {
    const { isClicked, setIsClicked } = useButtonContext();
    return (
        <span>
            {isClicked.locationAndTime.map((el) => {
            return (
                <div>
                    <h3>{el.locationName}</h3>
                    <div className="flex flexWrap">
                        {el.time.map((el2) => {
                            return (<div className="availableTime" >{el2}</div>)
                        })}
                    </div>
                </div>
            )
        })}
        </span>
    )
}
export default TicketSeat