import { assets } from '../../assets/assets';

const Header = () =>{
    return(
         <div className='h-[34vw] bg-no-repeat ml-40 relative'
         style={{backgroundImage: `url(${assets.header_img})`}}>
            <div className='flex flex-col items-start gap-[1.5vw]
            animate-fadeIn duration-300 bottom-[10%] left-[6vw] absolute'>
            <h2 className='text-[5rem] text-white font-semibold'>Order your food here</h2>

            <p className='w-[50%] text-white text-xl'>Choose from the diverse menu featuring a delectable array of dishes crafted with
                finest ingredient to satify your cravings and elevate your dining experience,
                one delicious meal at a time.
            </p>
            <button className='px-6 py-3 rounded-full bg-white'>View Menu</button>
            </div>
         </div>
    )
}

export default Header;