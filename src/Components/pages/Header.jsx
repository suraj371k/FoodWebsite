import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div
      className="h-[50vh] bg-no-repeat bg-cover bg-center relative md:h-[34vw]"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      <div
        className="flex flex-col items-start gap-4 p-4
                   animate-fadeIn duration-300 absolute bottom-10 left-6
                   md:gap-[1.5vw] md:bottom-[10%] md:left-[6vw]"
      >
        <h2
          className="text-4xl text-white font-semibold
                     md:text-[5rem] lg:w-full sm:w-full"
        >
          Order your food here
        </h2>

        <p className="w-full text-white text-base
                     md:w-[50%] md:text-xl lg:w-[50%]"
        >
          Choose from the diverse menu featuring a delectable array of dishes
          crafted with finest ingredient to satisfy your cravings and elevate
          your dining experience, one delicious meal at a time.
        </p>
        <button className="px-4 py-2 rounded-full bg-white md:px-6 md:py-3">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
