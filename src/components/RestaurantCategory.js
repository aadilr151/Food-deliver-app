import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  // console.log(data?.itemCards.length);

  const [showItems, setShowItems] = useState(false);
  const [but, setBut] = useState("⬇️");
  const handleClick = () => {
    setShowItems(!showItems);
    if (but === "⬇️") {
      setBut("⬆️");
    } else {
      setBut("⬇️");
    }
  };

  return (
    <>
      <div>
        <div className="w-8/12 m-auto shadow-lg p-4">
          <div
            className="flex justify-between cursor-pointer"
            onClick={handleClick}
          >
            <span className="font-bold">
              {data.title}({data?.itemCards.length})
            </span>
            <span>🔻</span>
          </div>
          {showItems && <ItemList items={data?.itemCards} />}
         
        </div>
      </div>
    </>
  );
};

export default RestaurantCategory;





















