import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "../style.css";
import { useButtonContext } from "../provider/contextButton";
import data from '../mockData/data.json'
const Home = () => {
    const { currentMovie, setCurrentMovie } = useButtonContext();
    return (
        <div className="posterWrapper">
            <div className="center"><h1>Дэлгэцнээ гарч буй кинонууд</h1></div>
            <div className="mainPosterArea">
                {data.map((el) => {
                    return (
                        <div className="moviePoster">
                            <div><h1>{el.name}</h1></div>
                            <div className="poster">
                                <img src={el.img} />
                                <div className="movLength">{el.lengthOfMovie}</div>
                            </div>
                            <Link to='/buyTicket'> <button onClick={() => { setCurrentMovie(el) }} className="moviePosterBtn" >Дэлгэрэнгүй / Захиалах</button> </Link>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}
export default Home