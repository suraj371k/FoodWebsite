import { menu_list } from "../assets/assets";

const Menu = ({ category, setCategory }) => {
  return (
    <div id="explore-menu" className="mx-4 md:mx-10 lg:mx-40">
      <h1 className="text-2xl md:text-4xl font-semibold mt-10 py-6 text-[#262626]">Explore Menu</h1>
      <p className="max-w-full md:max-w-[60%] text-[#808080]">
        Choose from the diverse menu featuring a delectable array of dishes crafted with the finest
        ingredients to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-4 text-center my-5 mx-auto overflow-x-auto scrollbar-none flex-wrap">
        {menu_list.map((item, index) => {
          return (
            <div
              className={`cursor-pointer ${category === item.menu_name ? "active border-red-400 pb-2" : ""}`}
              key={index}
              onClick={() => setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))}
            >
              <img src={item.menu_image} alt={item.menu_name} className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
              <p className="text-base md:text-lg lg:text-xl text-[#262626]">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className="my-2 h-0.5 bg-[#e2e2e2] border-none mx-4 md:mx-10 lg:mx-40" />
    </div>
  );
};

export default Menu;
