import "../style.css";
import { useButtonContext } from "../provider/contextButton";
import { useUserDataContext } from "../provider/contextUserData";
import { useEffect, useRef, useState } from "react";
import { getUserOrders } from "../firebase";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";


const Profile = () => {
  const { setUserPhoneNumber, userPhoneNumber } = useUserDataContext();
  const [userOrderData,setUserOrderData] = useState([]);
  const getTicketOrders = async () => {
    try {
      const data = await getUserOrders(userPhoneNumber);
      return data;
    } catch (error) {

    }
  }

  useEffect(() => {
    const get = async () => {
      try {
        const data = await getTicketOrders();
        setUserOrderData(data);
      }
      catch (err) {
        console.log(err);
      }
    }
    get();
  }, [])

  return (
    <span>
      <div className="spceEven">
        <div><h2>Your Phone Number :</h2>  {userPhoneNumber}</div>
        <div>
          <div><h2>Your orders</h2> </div>
          <div className="orderTable">
            {userOrderData.map((el) =>{
              return(
              <div className="border1px mt-30">
                <div>{el.order.name}</div>
                <div>{el.order.time}</div>
                <div>{el.order.location}</div>
                <div>{el.order.adult}</div>
                <div>{el.order.child}</div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </span>
  );
};
export default Profile;
