import Shimmer from "./Shimmer";
import RestorantCard from "./RestorantCard";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";
import { useState, useEffect,useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  
  const [searchValue, setSearchValue] = useState("");
  const [listOfRestorants, setListOfRestorants] = useState([]);
  const [filteredRestorants, setFilteredRestorants] = useState([]);
  const {loggedInUser,setUserName} = useContext(UserContext);

  useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      const data = await fetch(API_URL);
      const JsonData = await data.json();
      setListOfRestorants(
        // Optional Chaning
        JsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestorants(JsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants);
        
    };

  // Conditional Rendering
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return (<h1> No internet Avaialble</h1>)
  return filteredRestorants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex p-4 m-4">
        <div className="mx-4">
          <input
            className="border border-sky-500 px-3 mx-4 py-1 rounded-md w-1000"
            type="text"
            placeholder="Search Restorants....."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            className="border boder-pink-500 px-4 py-1 rounded-xl bg-gray-300 cursor-pointer"
            onClick={() => {
              const filteredRestorants = listOfRestorants.filter((res) =>
                res.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setFilteredRestorants(filteredRestorants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="border boder-pink-500 px-4 py-1 rounded-xl bg-gray-300 cursor-pointer"
          onClick={() => {
            const filteredList = listOfRestorants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestorants(filteredList);
          }}
        >
          Top Rated Restorant's
        </button>
        <input
            className="border border-sky-500 px-3 mx-4 py-1 rounded-md w-1000"
            type="text"
            placeholder="User Name"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
      </div>
      <div className="flex flex-wrap">
        {
        filteredRestorants.map((restaurant) => (
        <Link to={"restaurant/"+restaurant.info.id} key={restaurant.info.id}>
          <RestorantCard  resData={restaurant} />
        </Link>  
        )
      )
        }
      </div>
    </div>
  );
};

export default Body;
