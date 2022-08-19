import { useButtonContext } from "./contextButton";
const Zahial = () => {
    const { isClicked, setIsClicked } = useButtonContext();
    return (
        <div className="Ticket">
            <div className="ticketLeft">
                <img src={isClicked.img} />
            </div>
            <div className="ticketRight">
                <h1>{isClicked.name}</h1>
                <div className="ticketRightDiv"><p>{isClicked.desc}</p></div>
                <div className="ticketRightDiv"><b>Genre :</b> {isClicked.genre}</div>
                <div className="ticketRightDiv"><b>Length :</b> {isClicked.lengthOfMovie}</div>
                <div className="timeTable ticketRightDiv">
                    {isClicked.locationAndTime.map((el) => {
                        console.log(el)
                        return (
                            <div>
                                <h3>{el.locationName}</h3>
                                <div className="flex flexWrap">
                                    {el.time.map((el2) => {
                                        return (<div className="availableTime">{el2}</div>)
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Zahial