import { API_URL } from "./constants";
import { useState, useEffect, Component } from "react";

const useRestoraunts = () => {
  const [listOfRestorants, setListOfRestorants] = useState([]);
  // const [filteredRestorants, setFilteredRestorants] = useState([]);
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
    // setFilteredRestorants(JsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    // ?.restaurants);

  };

  return listOfRestorants;
};
export default useRestoraunts;
