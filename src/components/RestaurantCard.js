import { CDN_URL } from "../utils/constants";
import { useEffect,useState } from "react";

const RestaurantCard = (props) => {
  console.log("inside card component")

  const [test, setTest] = useState("amit");
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  useEffect(()=>{
    console.log("Card Call back")
    
  },[]);


  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }} >
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
