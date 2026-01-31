import restList from "../utills/mockData";
import Res_Card from "./Res_Card";

const Body = ()=>{
  return (
    <div className="Body">
      <div className="search">
        <h4>Search</h4>
      </div>
      <div className="res-container">
        {
          restList.map((restaurant)=>(
            <Res_Card key={restaurant.info.id} restaurantData = {restaurant}/>
          ))
        }
      </div>
    </div>    
  )
}

export default Body;