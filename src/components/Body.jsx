import Res_Card from "./Res_Card";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUI";
const Body = ()=>{
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING#");

    const json = await data.json();
    console.log(json);

    const restaurantCard = json?.data?.cards?.find(
    c => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  const restaurants =
  restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  setListOfRestaurant(restaurants)
  }

  if(listOfRestaurant.length === 0){
    return <ShimmerUi/>
  }
  return (
    <div className="Body">
      <div className="filter-btn">
        <button onClick={
            ()=>{
                const filterData = listOfRestaurant.filter(
                    (res)=>Number(res.info.avgRatingString) > 4.5
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