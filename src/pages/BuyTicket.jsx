import { useButtonContext } from "../provider/contextButton";
import TicketTime from './TicketTime.jsx'
import TicketNumber from './TicketNumber.jsx'
import TicketSeat from './TicketSeat.jsx'
import TicketFinal from './TicketFinal.jsx'
import TicketPayment from './TicketPayment.jsx'
import TicketQR from './TicketQR.jsx'
const BuyTicket = () => {
    const { currentMovie } = useButtonContext();
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
                      <TicketNumber/>
                      <TicketSeat/>
                      <TicketFinal/>
                      <TicketPayment/>
                      <TicketQR/>
                </div>

            </div>
        </div>
    )
}
export default BuyTicket