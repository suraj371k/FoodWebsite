import { useContext } from "react";
import { Context } from "../Context/Context";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(Context);

  return (
    <div id="food-display" className="mx-4 md:mx-10 lg:mx-40 mt-10">
      <h2 className="text-xl md:text-2xl font-semibold">Top dishes near you</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
                   mt-4 animate-fadeIn"
      >
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
