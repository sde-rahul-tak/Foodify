import { res_imgURL } from "../utills/Constant";

const Res_Card = ({restaurantData})=>{
  const {name, cloudinaryImageId, cuisines, avgRatingString, sla} = restaurantData.info;
  return (
    <div className="card">
      <div className="img-container">
        <img className="img" src={res_imgURL+cloudinaryImageId} alt="" />
      </div>
      <h3>{name}</h3>
      <h5>{cuisines}</h5>
      <h5>{avgRatingString}</h5>
      <h5>{sla.deliveryTime} Minutes</h5>
    </div>
  )
}

export default Res_Card;