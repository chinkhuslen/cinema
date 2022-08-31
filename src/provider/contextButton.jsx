import { createContext, useContext, useState } from "react";

const ButtonContext = createContext();


export const ButtonProvider = ({ children }) => {
    const [currentMovie, setCurrentMovie] = useState('');
    const [ticketTime, setTicketTime] = useState('');
    const [ticketCount, setTicketCount] = useState({adult:0,child:0});
    const [ticketSeat, setTicketSeat] = useState([]);
    const [ticketBtn, setTicketBtn] = useState('');

    return (
        <ButtonContext.Provider value={{ currentMovie, setCurrentMovie, ticketTime, setTicketTime, ticketCount, setTicketCount, ticketSeat,setTicketSeat,ticketBtn, setTicketBtn }}>
            {children}
        </ButtonContext.Provider>
    )
}
export const useButtonContext = () => useContext(ButtonContext)

