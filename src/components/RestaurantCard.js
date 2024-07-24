import { CDN_URL } from "../utils/constants";






const RestaurantCard = (props) => {
    const {resData} = props;
  
    const {cloudinaryImageId ,name , cuisines , avgRating , costForTwo , sla } = resData?.info;
      return (
          <div className="res-card p-4 m-4 w-56 border  rounded-2xl hover:shadow-xl hover:bg-green-50 flex flex-col items-center">
              <img className="res-logo h-60 shadow rounded-lg overflow-hidden border" src={CDN_URL + cloudinaryImageId} />
              <h3 className="font-bold p-2 mb-2">{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{avgRating} ⭐</h4>
              <h4>{costForTwo}</h4>
              <h4>{sla.deliveryTime} minutes</h4>            
          </div>
      )
  };

  export default RestaurantCard;