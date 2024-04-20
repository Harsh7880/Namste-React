import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext"; 
const RestorantCard = ({ resData }) => {

  const {loggedInUser} = useContext(UserContext);
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    resData?.info;
  return (
    <div className=" bg-gray-200 m-4 p-4 w-52 rounded-lg items-center hover:bg-slate-400">
      <div className="align-middle rounded-lg">
        <img alt="Restorant-logo" className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="py-2">
        <h2 className="font-bold my-2">{name}</h2>
        <h4>{avgRating} ⭐️</h4>
        <p className="font-light text-xs my-2">{cuisines.join(", ")}</p>
        <p>{areaName}</p>
        <p> User : {loggedInUser} </p>
      </div>
    </div>
  );
};
export default RestorantCard;
