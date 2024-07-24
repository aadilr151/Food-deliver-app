import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";





const Body = () => {
  const [listOfRestaurants , setListOfRestaurants] = useState([]);
  const [filteredRestaurant , setFilteredRestaurants] = useState([])

  const [searchText , setSearchText] = useState("");

   useEffect(()=> {
     fetchData();
   } , []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.365692&lng=85.358132&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };



    return listOfRestaurants.length ===0 ? <Shimmer/> : (
        <div className="body">
            <div className=" flex justify-between">
                <div className="search m-4 p-4 ">
                    <input type="text" className=" relative bg-white  border py-1 px-2 rounded-lg border-black" value = {searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button  className="py-2 px-4 m-4  text-sm font-semibold rounded-lg border border-transparent bg-green-300 text-black hover:bg-green-400 " onClick={() => {
                        
                      const  filteredRestaurant = listOfRestaurants.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                      );

                      setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
              <div>
                <button className="py-2 px-4 mr-40 mt-12 flex items-center text-sm font-semibold rounded-lg border border-transparent bg-green-300 text-black hover:bg-green-400  " onClick={() => {const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4
                );
                setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
              </div>
                
            </div>
            <div className="res-container flex flex-wrap">
                {
                  filteredRestaurant.map((restaurant) => (
                  
                  <Link   key = {restaurant.info.id} to={"/restaurants/" + restaurant.info.id }  > <RestaurantCard resData = {restaurant} />  </Link>  
                    ))}

            </div>
        </div>
    );
};

export default Body;