import { menu_list } from "../assets/assets";



const Menu = ({category , setCategory}) => {
      return(
        <div id="explore-menu" className="ml-40">
          <h1 className="text-4xl font-[500] mt-10 py-6 text-[#262626]">Explore Menu</h1>
         <p className="w-max-[60%] columns-[#808080]">
         Choose from the diverse menu featuring a delectable array of dishes crafted with
                finest ingredient to satify your cravings and elevate your dining experience,
                one delicious meal at a time.
         </p>
         <div className="flex justify-between items-center gap-[30px] text-center my-[20px] 
         mx-auto overflow-y-auto mr-40 scrollbar-none">
          {
            menu_list.map((item , index) =>{
              return(
                <div className="cursor-pointer" key={index} onClick={() => setCategory(prev => prev === item.menu_name?"All":item.menu_name)}>
                   <img className={category===item.menu_name?"active border-red-400 pb-2":""} src={item.menu_image}/>
                   <p className="text-xl text-[#262626]">{item.menu_name}</p>
                  </div>
              )
            })
          }
         </div>
         <hr className="my-10px h-2 bg-[#e2e2e2] border-none mr-40"/>
        </div>
      )
};

export default Menu;
