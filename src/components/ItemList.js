import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
    return (
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div>
                <span>{item?.card?.info?.name} - </span>
                <span>₹ - {item?.card?.info?.price / 100}</span>
              </div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
  
            <div className="w-3/12">
              <div className="absolute">
                <button className="bg-green-800 px-2 mx-10 rounded-md text-white font-bold"  onClick={() => handleAddItem(item)} >
                  Add +
                </button>
              </div>
              <img
                src={
                  CDN_URL +
                  item?.card?.info?.imageId
                }
                className="w-full"
              ></img>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ItemList;