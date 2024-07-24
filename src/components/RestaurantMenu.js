import { useState , useEffect } from "react";

import Shimmer from "./Shimmer";


import { useParams } from "react-router-dom";

import { MENU_API } from "../utils/constants";

import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const [resInfo , setResInfo] = useState(null);

    const { resId }= useParams();

    console.log(resId);
    

    useEffect(() => {
        fetchMenu();
      }, []);
      
      const fetchMenu = async () => {
         const data = await fetch(MENU_API + resId);
         const json = await data.json();
  
         console.log(json);

         setResInfo(json.data);
        
  
      };

      if (resInfo===null) return <Shimmer/>; 
      
      const  { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;

      console.log(itemCards);

      const categories =
resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
(c) =>
  c.card?.["card"]?.["@type"] ===
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
console.log(categories);
  
    return (
       
        <div className="text-center">
             <h1 className="my-6 text-4xl font-bold leading-none tracking-tight text-gray-900 lg:text-3xl">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
           
            <h3 className="text-lg font-bold">{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(",")}</h3>
            <h3 className="text-lg font-bold">{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>


            {/* categories accordions */}
           {categories.map((category) => (
             <RestaurantCategory data={category?.card?.card} />
           ))}

           
        </div>
    );

};

export default RestaurantMenu;