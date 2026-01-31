import restList from "../utills/mockData";
import Res_Card from "./Res_Card";
import mockData from "../utills/mockData"
import { useState } from "react";

const Body = ()=>{
    const [listOfRestaurant, setListOfRestaurant] = useState(mockData);
  return (
    <div className="Body">
      <div className="filter-btn">
        <button onClick={
            ()=>{
                const filterData = listOfRestaurant.filter(
                    (res)=>res.info.avgRatingString > 4.5
                );
                setListOfRestaurant(filterData)
            }
        }>
            Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {
          listOfRestaurant.map((restaurant)=>(
            <Res_Card key={restaurant.info.id} restaurantData = {restaurant}/>
          ))
        }
      </div>
    </div>    
  )
}

export default Body;