import RestorantCard from "./RestorantCard";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestorants, setListOfRestorants] = useState([]);
  const [filteredRestorants, setFilteredRestorants] = useState([]);

  const [searchValue, setSearchValue] = useState("");

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

  return filteredRestorants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar">
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search Restorants....."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestorants = listOfRestorants.filter((res) =>
                res.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setFilteredRestorants(filteredRestorants);
            }}
          >
            {" "}
            Search
          </button>
        </div>
        <button
          className="filter-restorant"
          onClick={() => {
            const filteredList = listOfRestorants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestorants(filteredList);
          }}
        >
          Top Rated Restorant's
        </button>
      </div>
      <div className="res-container">
        {
        filteredRestorants.map((restaurant) => (
          
        <Link to={"restaurant/"+restaurant.info.id} key={restaurant.info.id}>
          <RestorantCard  resData={restaurant} />
        </Link>  
        ))
        }
      </div>
    </div>
  );
};

export default Body;
