import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  console.log("inside body component")
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filterdListOfRestaurants, setFilterdListOfRestaurants] = useState([]);

  const [search, setSearch] = useState("");

  const fetchData = async ()=>{
  var data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json();
  console.log(json)
  setListOfRestraunt(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilterdListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  useEffect(()=>{
    console.log("Body Call back")
    fetchData()
    
  },[]);

  const filterSearch = (e)=>{
    setSearch(e.target.value);
    var data =listOfRestaurants.filter(x => x.info.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilterdListOfRestaurants(data);

  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.1
            );
            setFilterdListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <input type="text" value={search} placeholder="Search" onChange={(e)=>{filterSearch(e)}}/>
      </div>
      <div className="res-container">
        {filterdListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
