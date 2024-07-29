import { useContext } from "react";
import { Context } from "../Context/Context";
import FoodItem from "./FoodItem";


const FoodDisplay = ({category}) =>{
    const {food_list} = useContext(Context)

    return(
        <div id="food-display" className="mx-40 mr-40 mt-10">
         <h2 className="text-2xl font-semibold">Top dishes near you</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 
         mt-4 animate-fadeIn">
            {
                food_list.map((item,index) =>{
                    if(category === "All" || category === item.category){
                   
                        return <FoodItem key={index} id={item._id} name={item.name}
                        description={item.description} price={item.price} image={item.image}/>
                    }
                })
            }
         </div>
        </div>
    )
}

export default FoodDisplay;