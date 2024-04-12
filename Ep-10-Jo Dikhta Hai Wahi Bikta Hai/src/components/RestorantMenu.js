import Shimmer from "./Shimmer";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";
import useRestorauntMenu from "../utils/useRestorauntMenu";
const RestorantMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestorauntMenu(resID);

  if (resInfo === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, locality, sla } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;

  return (
    <>
      <div className="restorant-page  m-4 p-8">
        <p className="text-xs text-gray-500">
          Home / Vijayawada / UBQ by Barbeque Nation
        </p>
        <h1 className="font-bold my-2 text-lg">{name}</h1>
        <div className="res-details">
          <p className="text-sm text-gray-500 pb-2">
            {avgRating} ⭐️ (5K+ ratings) • {costForTwoMessage}
          </p>
          <p className="text-sm text-gray-500 pb-2"> Outlet -- {locality}</p>
          <p className="text-sm text-gray-500 pb-2">Delivery Time : {sla.deliveryTime}</p>
          <hr></hr>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mt-2">Deals for you</h3>
        <div className="flex justify-between m-4">
          <div className="bg-gray-300 p-3 rounded-lg px-7">
            <h4>50% Off Upto ₹90</h4>
            <h5>USE SWIGGY50</h5>
          </div>
          <div className="bg-gray-300 p-3 rounded-lg px-7">
            <h4>50% Off Upto ₹90</h4>
            <h5>USE SWIGGY50</h5>
          </div>
          <div className="bg-gray-300 p-3 rounded-lg px-7">
            <h4>50% Off Upto ₹90</h4>
            <h5>USE SWIGGY50</h5>
          </div>
        </div>
        <div className="menuTitle">
          <h6 className="text-center my-5">Menu</h6>
        </div>
        <h2 className="font-bold">Recommended(16)</h2>

        {itemCards.map((itemCard) => (
          <div key={itemCard.card.info.id} className="bg-gray-200 p-4 m-4 flex items-center">
            <MenuItem menuItem={itemCard} />
          </div>
        ))}
      </div>
    </>
  );
};

export default RestorantMenu;
