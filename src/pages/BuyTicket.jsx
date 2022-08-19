import { useButtonContext } from "../provider/contextButton";
import TicketTime from './TicketTime.jsx'
const BuyTicket = () => {
    const { currentMovie, setCurrentMovie } = useButtonContext();

    return (
        <div className="Ticket">
            <div className="ticketLeft">
                <img src={currentMovie.img} />
            </div>
            <div className="ticketRight">
                <h1>{currentMovie.name}</h1>
                <div className="ticketRightDiv"><p>{currentMovie.desc}</p></div>
                <div className="ticketRightDiv"><b>Genre :</b> {currentMovie.genre}</div>
                <div className="ticketRightDiv"><b>Length :</b> {currentMovie.lengthOfMovie}</div>
                <div className="timeTable ticketRightDiv">
                    <TicketTime/>
                </div>
            </div>
        </div>
    )
}
export default BuyTicket