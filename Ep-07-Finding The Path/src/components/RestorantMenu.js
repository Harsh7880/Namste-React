import { useEffect, useState, uses } from "react";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import {useParams} from 'react-router-dom'
const RestorantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resID} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resID);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name,avgRating,costForTwoMessage,locality,sla } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card
 
  return (
    <div>
      <div className="restorant-page">
        <p className="backTrackUrl">
          Home / Vijayawada / UBQ by Barbeque Nation
        </p>
        <h1>{name}</h1>
        <div className="res-details">
          <p>{avgRating} (5K+ ratings) •  {costForTwoMessage}</p>
          <p> Outlet -- {locality}</p>
          <p>Delivery Time : {sla.deliveryTime}</p>
          <hr></hr>
        </div>
        <h3>Deals for you</h3>
        <div className="offers-container">
          <div className="offer">
            <h4>50% Off Upto ₹90</h4>
            <h5>USE SWIGGY50</h5>
          </div>
          <div className="offer">
            <h4>50% Off Upto ₹90</h4>
            <h5>USE SWIGGY50</h5>
          </div>
          <div className="offer">
            <h4>50% Off Upto ₹90</h4>
            <h5>USE SWIGGY50</h5>
          </div>
        </div>
        <div className="menuTitle">
          <h6>Menu</h6>
        </div>
        <h2>Recommended(16)</h2>

        
         {
            itemCards.map((itemCard)=>(
                <div key={itemCard.card.info.id} className="menu-items">
                <MenuItem  menuItem = {itemCard}/>
                </div>
            ))
         }
         
        
      </div>
    </div>
  );
};

export default RestorantMenu;
