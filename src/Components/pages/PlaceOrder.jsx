import React, { useContext } from 'react';
import { Context } from '../../Context/Context';

const PlaceOrder = () => {

     const {getTotalCartAmount} = useContext(Context)

    return (
        <form className='flex items-center  justify-between gap-[50px] mt-24'>
            <div className='w-full'>
                <p className='text-2xl font-bold'>Delivery Information</p>
                <div className='text-xl font-semibold mb-12'>
                    <input className='mb-4 w-[60%] border-2 border-black px-4 py-2 
                rounded-xl outline-[tomato]' type="text" placeholder="First Name" />
                    <input className='mb-4 w-[60%] border-2 border-black px-4 py-2 
                rounded-xl outline-[tomato]' type="text" placeholder="Last Name" />
                </div>
                <div className='text-xl font-semibold mb-12'>
                <input className='mb-4 w-[60%] border-2 border-black px-4 py-2 
                rounded-xl outline-[tomato]' type="email" placeholder="Enter your email" />
                <input className='mb-4 w-[60%] border-2 border-black px-4 py-2 
                rounded-xl outline-[tomato]'  type="text" placeholder="Street" />
                </div>
                <div className='text-xl font-semibold mb-12'>
                    <input className='mb-4 w-[60%] border-2 border-black px-4 py-2 
                rounded-xl outline-[tomato]'  type="text" placeholder="City" />
                    <input className='mb-4 w-[60%] border-2 border-black px-4 py-2 
                rounded-xl outline-[tomato]'  type="text" placeholder="State" />
                </div>
                <div className='text-xl font-semibold mb-12'>
                    <input className='mb-4 w-[60%] border-2 border-black px-4 py-2 
                rounded-xl outline-[tomato]'  type="text" placeholder="Zip Code" />
                    <input className='mb-4 w-[60%] border-2 border-black px-4 py-2 
                rounded-xl outline-[tomato]'  type="text" placeholder="Country" />
                </div>
                <input className='mb-4 w-[60%] border-2 border-black px-4 py-2 
                rounded-xl outline-[tomato]'  type="text" placeholder="Phone" />
            </div>
            <div className="mt-[80px] flex justify-between gap-4 w-[30%]">
                <div className="flex-1 flex flex-col gap-7">
                    <h2 className="text-3xl font-semibold ml-20">Cart Totals</h2>
                    <div className="ml-20">
                        <div className="flex justify-between text-[#555] w-[50%] py-8">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr className="w-[50%]" />
                        <div className="flex justify-between text-[#555] w-[50%] py-8">
                            <p>Delivery Fee</p>
                            <p>${2}</p>
                        </div>
                        <hr className="w-[50%]" />
                        <div className="flex justify-between text-[#555] w-[50%] py-8">
                            <b>Total</b>
                            <b>${getTotalCartAmount() + 2}</b>
                        </div>
                        <button 
                            type="button" 
                            className="px-6 py-3 rounded-lg bg-[tomato] text-white mb-4"
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default PlaceOrder;
