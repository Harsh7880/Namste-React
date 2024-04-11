import RestorantCard from "./RestorantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {useState} from 'react'
import useRestoraunts from "../utils/useRestoraunts";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  
  const [searchValue, setSearchValue] = useState("");
  const {listOfRestorants,filteredRestorants} = useRestoraunts();
  // Conditional Rendering
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return (<h1> No internet Avaialble</h1>)
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
