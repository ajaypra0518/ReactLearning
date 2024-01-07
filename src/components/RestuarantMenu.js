import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = ()=>{

    const [resInfo,setResinfo]=useState([]);
    let param =useParams();

    useEffect(()=>{
        async function fetchData() {
            var data = await fetch(MENU_API+param.resId);
            const json = await data.json();
            console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.itemCards)
          setResinfo(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.itemCards)
        }
          fetchData();
    },[])
    
    return(
        <div>
            <h1>Resturant Menu</h1>
            <ul>
            {resInfo.map((result)=>
                <li>{result.card.info.name}</li>
            )}
            </ul>
        </div>
    )
}
export default RestaurantMenu;