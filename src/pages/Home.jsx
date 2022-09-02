import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "../style.css";
import { useButtonContext } from "../provider/contextButton";
import data from '../mockData/data.json'
const Home = () => {
    const {setTicketTime} = useButtonContext('');
    const { setTicketCount} = useButtonContext({adult:0,child:0});
    const { setTicketSeat} = useButtonContext([]);
    const { setTicketBtn} = useButtonContext('');
    const { setCurrentMovie } = useButtonContext();
    const resetState = () =>{
        setTicketTime('');
        setTicketCount({adult:0,child:0});
        setTicketSeat([]);
        setTicketBtn('');
    }
    return (
        <div className="posterWrapper">
            <div className="center txtShadow"><h1>Дэлгэцнээ гарч буй кинонууд</h1></div>
            <div className="mainPosterArea">
                {data.map((el) => {
                    return (
                        <div className="moviePoster">
                            <div><h1>{el.name}</h1></div>
                            <div className="poster">
                                <img src={el.img} />
                                <div className="movLength">{el.lengthOfMovie}</div>
                            </div>
                            <Link to='/buyTicket'> <button onClick={() => { resetState();setCurrentMovie(el) }} className="moviePosterBtn" >Дэлгэрэнгүй / Захиалах</button> </Link>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}
export default Home