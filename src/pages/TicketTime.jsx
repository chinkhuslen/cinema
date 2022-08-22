import "../style.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import { useButtonContext } from "../provider/contextButton";

const TicketTime = () => {
    const { currentMovie } = useButtonContext();
    const { ticketTime, setTicketTime } = useButtonContext();
    const { ticketBtn, setTicketBtn } = useButtonContext();
    const clearClass = () => {
        let arr = document.getElementsByClassName('availableTime');
        for (let i of arr) {
            i.classList.remove('activeTicketSeat')
        }
    }
    
    return (
        <span className={ticketBtn == '' ? "active" : "dispNone"}>
            {currentMovie.locationAndTime.map((el) => {
                return (
                    <div>
                        <h3>{el.locationName}</h3>
                        <div className="flex flexWrap">
                            {el.time.map((el2) => {
                                return (<div className="availableTime" onClick={(event) => { clearClass(); setTicketTime({ location: el.locationName, time: el2 }); event.target.classList.add('activeTicketSeat') }}>{el2}</div>)
                            })}
                        </div>
                    </div>
                )
            })}
            <div className="ticketRightDiv flex">
                <button className={ticketTime != '' ? "active  buyTicketBtn" : "dispNone"} onClick={()=> setTicketBtn('')}> Back </button>
                <button className={ticketTime != '' ? "active  buyTicketBtn" : "dispNone"} onClick={()=> setTicketBtn('step2')}> Next </button>
            </div>
        </span>
    )
}
export default TicketTime